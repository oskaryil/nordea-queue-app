import { REDIRECT_TO_NORDEA } from './types';

const INITIAL_STATE = {
	redirected: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case REDIRECT_TO_NORDEA:
			return { ...state, redirected: true };
		default:
			return state;
	}
}
