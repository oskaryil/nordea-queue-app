import axios from "axios";
import { route } from 'preact-router';
import config from "../../config/config.js";

import { SEND_CODE, SEND_CODE_SUCCESS, SEND_CODE_FAIL } from './types';
axios.defaults.baseURL = "http://localhost:4000/api";
import setAuthorizationToken from '../auth/setAuthorizationToken'

export const sendCode = code => async dispatch => {
  console.log('coddsadae', code)
  try {
    const accessToken = localStorage.getItem('token');
		dispatch({ type: SEND_CODE });
		const { data } = await axios({
			url: '/nordea/auth',
			method: 'post',
			data: {
				accessCode: code	
			},
			headers: {
				'Authorization': accessToken
			} });
		dispatch({
      type: SEND_CODE_SUCCESS
    });
		route('/prep', true);
  } catch (err) {
		dispatch({ type: SEND_CODE_FAIL, payload: err.message });
		console.error(err);
  }
};
