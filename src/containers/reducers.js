import { combineReducers } from 'redux';
import { counterReducer } from './reducer.js';

export const counterApp = combineReducers({
	counter: counterReducer,
});
