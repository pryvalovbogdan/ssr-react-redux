import { combineReducers } from 'redux';
import { counterReducer } from './reducer';

export const counterApp = combineReducers({
	counter: counterReducer,
});
