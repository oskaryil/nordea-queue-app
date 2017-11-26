import update from 'immutability-helper';
import { SET_FIRST_MESSAGE } from './types';
import { APPEND_MESSAGE, UPDATE_VALUES } from '../chatbot/types';

const INITIAL_STATE = {
    messages: [],
    step: null,
    values: {
        currency: null,
        amount: null,
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
                step: action.step
            });

        default:
            return state;
    }
}
