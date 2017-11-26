import { SEND_CODE, SEND_CODE_SUCCESS, SEND_CODE_FAIL } from './types';

const INITIAL_STATE = {
	loading: false,
	error: ""
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SEND_CODE: 
			return { ...state, loading: true };
		case SEND_CODE_SUCCESS:
			return { ...state, loading: false };
		case SEND_CODE_FAIL:
			return { ...state, error: action.payload };
		default:
			return state;
	}
}
