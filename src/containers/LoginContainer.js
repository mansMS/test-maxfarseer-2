import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setLogin } from '../reducers/login';
import Login from '../components/pages/login';
import { basetUrl } from '../services/sourcesUrl';

const LoginContainer = ({ id, loading, error, setLogin }) => {
	const postUrl = `${basetUrl}/validate`;

	const onFormSubmit = (e, email, password, setPassword) => {
		e.preventDefault();
		if (email.trim() && password.trim()) {
			setLogin(postUrl, email, password, setPassword);
		}
	}

	if (id) {
		return <Redirect to="/profile" />
	}

	return <Login loading={loading} error={error} onFormSubmit={onFormSubmit} />
}

const mapStateToProps = ({ login: { id, loading, error } }) => {
	return { id, loading, error }
}

const mapDispatchToProps = { setLogin }

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)