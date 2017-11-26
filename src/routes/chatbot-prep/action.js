import { SET_FIRST_MESSAGE } from './types';
import { route } from 'preact-router';

export const setFirstMessage = firstQuestion => dispatch => {
    dispatch({type: SET_FIRST_MESSAGE, message: firstQuestion});
    route('/chat', true);
};
