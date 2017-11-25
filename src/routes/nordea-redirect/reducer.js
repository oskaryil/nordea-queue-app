const INITIAL_STATE = {
  code: ''
};

export const sendCode = (state = INITIAL_STATE, action) => {

	switch (action.type) {
		case 'SENDING_CODE':
			return { ...state, code: action.code };
		default:
			return state;
	}
}
