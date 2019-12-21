import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUserData } from '../reducers/profile';
import { logout } from '../actions';
import Profile from '../components/pages/profile';
import Spinner from '../components/spinner';
import { basetUrl } from '../services/sourcesUrl';

class ProfileContainers extends Component {

	componentDidMount() {
		const { id, setUserData } = this.props;

		const getUserDataUrl = `${basetUrl}/user-info/${id}`;

		setUserData(getUserDataUrl);
	}

	render() {
		const { id, email, userData, loading, error, logout } = this.props;

		return (
			<>
				{
					loading
						? <Spinner />
						: <Profile id={id} email={email} userData={userData} logout={logout} />
				}
				{error && <p className="error">{error}</p>}
			</>
		)
	}
}

const mapStateToProps = ({ login: { id, email }, profile: { userData, loading, error } }) => {
	return { id, email, userData, loading, error }
}

const mapDispatchToProps = { logout, setUserData }

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainers);