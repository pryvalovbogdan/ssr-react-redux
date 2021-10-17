import { APP_RESET, SET_COUNT } from './consts.js';

export const initialState = {
	count: 1,
};

export const counterReducer = (
	state = initialState,
	action
) => {
	const { type, payload } = action;

	switch (type) {
		case SET_COUNT:
			return setCount(state, payload);

		case APP_RESET:
			return { ...initialState };

		default:
			return state;
	}
};

function setCount(state, payload) {
	return { ...state, count: payload };
}
