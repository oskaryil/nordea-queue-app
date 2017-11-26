import { APPEND_MESSAGE, UPDATE_VALUES } from './types';
import * as axios from 'axios';

const contents = {
    currency: 'What currency?',
    amount:'How much?',
    account: 'From which account?'
};

export const addMessage = (message, owner) => dispatch => {
    dispatch({type: APPEND_MESSAGE, message, owner});
};

export const queryBot = (message, step) => async dispatch => {
    //axios.default.baseURL = 'http://10.100.44.202:3000/api/v1/';

    const { data } = await axios({
        method: 'get',
        url: 'http://10.100.44.202:3000/api/v1/chat/message',
        params: {
            answer: message,
            field: step,
            errand: 'withdrawal'
        }
    });

    dispatch({type: APPEND_MESSAGE, message: contents[data.field], owner: 'bot'});
    dispatch({type: UPDATE_VALUES, step: data.next_question, valueName: data.field, valueValue: data.value});
};
