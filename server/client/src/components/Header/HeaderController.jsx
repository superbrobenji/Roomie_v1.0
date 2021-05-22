import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import HeaderView from './HeaderView';

const HeaderController = ({ auth }) => {
	const handleLoginRender = () => {
		if (auth.loading) return { url: false, text: 'loading' };
		switch (auth.data) {
			case false:
				return { url: '/auth/google', text: 'Login with google' };
			default:
				return { url: '/api/logout', text: 'Logout' };
		}
	};

	const getLogoUrl = () => (auth ? '/home' : '/');

	return (
		<HeaderView
			handleLoginRender={handleLoginRender()}
			getLogoUrl={getLogoUrl}
		/>
	);
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(
	mapStateToProps,
	null,
)(HeaderController);

HeaderController.propTypes = {
	auth: PropTypes.shape({
		data: PropTypes.oneOfType([
			PropTypes.bool,
			PropTypes.objectOf(
				PropTypes.oneOfType([
					PropTypes.string,
					PropTypes.number,
				]),
			),
		]),
		loading: PropTypes.bool,
	}).isRequired,
};
