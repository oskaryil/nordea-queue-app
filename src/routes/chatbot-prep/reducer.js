import update from 'immutability-helper';
import { SET_FIRST_MESSAGE } from './types';
import { APPEND_MESSAGE, MAKE_SUMMARY, UPDATE_VALUES } from '../chatbot/types';

const INITIAL_STATE = {
    messages: [],
    step: null,
    values: {
        currency: null,
        number: null,
        account: null
    }
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_FIRST_MESSAGE:
            return update(state, {
                messages: {$set: [
                    {
                        content: action.message,
                        owner: 'customer'
                    }
                ]},
                step: {$set: 'currency'}
            });

        case APPEND_MESSAGE:
            return update(state, {
                messages: {$push: [
                    {
                        content: action.message,
                        owner: action.owner
                    }
                ]}
            });

        case UPDATE_VALUES:
            return update(state, {
                [action.valueName]: {$set: action.valueValue},
                step: {$set: action.step}
            });

        case MAKE_SUMMARY:
            console.log(state);
            return update(state, {
                messages: {$push: [
                    {
                        content: `You want to withdraw ${ state.number } ${ state.currency } from account ${ state.account }`,
                        owner: 'bot'
                    }
                ]}
            });

        default:
            return state;
    }
}
