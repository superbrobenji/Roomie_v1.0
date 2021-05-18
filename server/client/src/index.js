/* eslint "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }] */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reportWebVitals from './reportWebVitals';
import App from './components/App';
import reducers from './reducers';

const initialState = {};

const store = createStore(
	reducers,
	initialState,
	applyMiddleware(),
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#root'),
);

//! temp
reportWebVitals();
