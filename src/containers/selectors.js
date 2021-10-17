import { initialState } from './reducer.js';

export const selectorGetData = state => state.counter || initialState;