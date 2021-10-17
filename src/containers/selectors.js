import { initialState } from './reducer';

export const selectorGetData = state => state.counter || initialState;