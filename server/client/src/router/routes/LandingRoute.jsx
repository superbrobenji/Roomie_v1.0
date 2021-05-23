import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { authPropTypes } from '../../helpers/propTypesFactory';

import Landing from '../../components/Landing';

const LandingRoute = ({ auth }) => (
	<Route exact path="/">
		{!auth.loading && auth.data ? (
			<Redirect to="/home" />
		) : (
			<Landing />
		)}
	</Route>
);

export default LandingRoute;

LandingRoute.propTypes = {
	...authPropTypes,
};
