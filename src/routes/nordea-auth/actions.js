import axios from 'axios';
import config from '../../config/config.js';

import { REDIRECT_TO_NORDEA } from './types';

const nordeaOAUTH_URL = 'https://api.hackathon.developer.nordeaopenbanking.com/v1/authentication';

export const redirectToNordea = () => async dispatch => {
	try {
		dispatch({ type: REDIRECT_TO_NORDEA });
		window.location = `${nordeaOAUTH_URL}?client_id=${config.nordea_client_id}&redirect_uri=${config.nordea_redirect_uri}&state=""&X-Response-Scenarios=AuthenticationWithUI`;
	} catch (err) {
		console.log(err);	
	}
};
