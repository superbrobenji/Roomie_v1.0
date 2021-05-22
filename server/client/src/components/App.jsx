import React, { useEffect } from 'react';
import {
	BrowserRouter,
	Redirect,
	Route,
} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Home from './Home';

const App = ({ fetchUser, auth }) => {
	useEffect(() => {
		fetchUser();
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
						>
							{!auth.loading && auth.data ? <Redirect to="/home" /> : <Landing />}
						</Route>
						<Route path="/home" component={Home} />
					</div>
				</BrowserRouter>
			</div>
		</React.StrictMode>
	);
};

App.propTypes = {
	fetchUser: PropTypes.func.isRequired,
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

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, actions)(App);
