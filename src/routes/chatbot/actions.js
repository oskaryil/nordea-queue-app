import { APPEND_MESSAGE, MAKE_SUMMARY, UPDATE_VALUES } from './types';
import * as axios from 'axios';

const contents = {
    currency: 'What currency?',
    number: 'How much?',
    account: 'From which account?'
};

export const addMessage = (message, owner) => dispatch => {
    dispatch({type: APPEND_MESSAGE, message, owner});
};

export const queryBot = (message, step) => async dispatch => {
    axios.defaults.baseURL = 'http://10.100.44.202:3000/api/v1/';

    const { data } = await axios.get('chat/message', {
        params: {
            answer: message,
            field: step,
            errand: 'withdrawal'
        }
    });

    dispatch({type: UPDATE_VALUES, step: data.next_question, valueName: data.field, valueValue: data.value});

    if (!data.next_question) {
        dispatch({type: MAKE_SUMMARY});
    }
    else {
        dispatch({type: APPEND_MESSAGE, message: contents[data.next_question], owner: 'bot'});
    }
};
