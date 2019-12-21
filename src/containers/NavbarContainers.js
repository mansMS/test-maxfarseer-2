import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/app/navbar';

const NavbarContainer = ({ isClientAuthorized }) => {
	return <Navbar isClientAuthorized={isClientAuthorized} />
}

const mapStateToProps = (state) => {
	return {
		isClientAuthorized: !!state.login.id
	}
}

export default connect(mapStateToProps)(NavbarContainer);