import axios from "axios";
import config from "../../config/config.js";

import { SEND_CODE, SEND_CODE_SUCCESS, SEND_CODE_FAIL } from './types';

export const sendCode = code => async dispatch => {
  try {
    const accessToken = localStorage.getItem('token');
		dispatch({ type: SEND_CODE });
		const { data } = await axios({
			url: '/nordea/auth',
			data: {
				accessCode: code	
			},
			headers: {
				'Authorization': `JWT ${accessToken}`
			}
		});
    dispatch({
      type: SEND_CODE_SUCCESS
    });
  } catch (err) {
		dispatch({ type: SEND_CODE_FAIL, payload: err.message });
		console.error(err);
  }
};
