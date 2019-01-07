import {
    ACCEPT_ANSWER_REQUEST,
    ACCEPT_ANSWER_SUCCESS,
    ACCEPT_ANSWER_FAILURE,
} from '../actions/types';

const initialState = {
    answer: [],
    error: null,
    accepting: false
}

const acceptAnswerReducer = (state = initialState, action) => {

    switch (action.type) {
        case ACCEPT_ANSWER_REQUEST:
            return { ...state, accepting: true };

        case ACCEPT_ANSWER_SUCCESS:
            return { ...state, answer: action.payload, accepting: false };

        case ACCEPT_ANSWER_FAILURE:
            return { ...state, error: action.payload, accepting: false };

    }
    return state;

}

export default acceptAnswerReducer;