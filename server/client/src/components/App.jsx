import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchUser } from '../redux/actions';
import { authPropTypes } from '../helpers/propTypesFactory';

import Router from '../router';
import Header from './Header';

const App = ({ auth, ...props }) => {
	useEffect(() => {
		props.fetchUser();
	}, []);

	return (
		<React.StrictMode>
			<div className="container">
				<Router auth={auth} Header={Header} />
			</div>
		</React.StrictMode>
	);
};

App.propTypes = {
	fetchUser: PropTypes.func.isRequired,
	...authPropTypes,
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, {
	fetchUser,
})(App);
