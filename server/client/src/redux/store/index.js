import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import initialState from './initialState';
import reducers from '../reducers';

const store = createStore(
	reducers,
	initialState,
	applyMiddleware(reduxThunk),
);

export default store;
