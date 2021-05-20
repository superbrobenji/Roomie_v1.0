import React, { useEffect } from 'react';
import {
	BrowserRouter,
	Route,
} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../actions';
import Header from './Header';

const Landing = () => <div>Landing</div>;

const App = (props) => {
	useEffect(() => {
		props.fetchUser();
	}, []);

	return (
		<React.StrictMode>
			<div className="container">
				<BrowserRouter>
					<div>
						<Header />
						<Route
							exact
							path="/"
							component={Landing}
						/>
					</div>
				</BrowserRouter>
			</div>
		</React.StrictMode>
	);
};

App.propTypes = {
	fetchUser: PropTypes.func.isRequired,
};

export default connect(null, actions)(App);
