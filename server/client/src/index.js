/* eslint "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }] */
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const initialState = {
	auth: { data: false, loading: true },
};

const store = createStore(
	reducers,
	initialState,
	applyMiddleware(reduxThunk),
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#root'),
);
