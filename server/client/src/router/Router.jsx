import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { authPropTypes } from '../helpers/propTypesFactory';
import { LandingRoute, HomeRoute } from './routes';

const Routes = ({ auth, Footer, Header }) => (
	<BrowserRouter>
		<div>
			{Header ? <Header /> : null}
			<LandingRoute auth={auth} />
			<HomeRoute />
			{Footer ? <Footer /> : null}
		</div>
	</BrowserRouter>
);

export default Routes;

Routes.propTypes = {
	...authPropTypes,
};
