import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import HeaderView from './HeaderView';

const HeaderController = ({ auth }) => {
	console.log(auth);
	const handleLoginRender = () => {
		if (auth.loading) return 'loading';
		switch (auth.data) {
			case false:
				return (
					<li>
						<a href="/auth/google">
							Login with google
						</a>
					</li>
				);
			default:
				return (
					<li>
						<a href="/api/logout">Logout</a>
					</li>
				);
		}
	};

	return (
		<HeaderView
			funcHandleLoginRender={handleLoginRender}
		/>
	);
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(
	mapStateToProps,
	null,
)(HeaderController);

HeaderController.defaultProps = { auth: null };

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
	}),
};
