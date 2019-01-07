import {
    POST_ANSWER_REQUEST,
    POST_ANSWER_SUCCESS,
    POST_ANSWER_FAILURE,
} from '../actions/types';

const initialState = {
    answer: null,
    error: null,
    posting: false
}

const postAnswerReducer = (state = initialState, action) => {

    switch (action.type) {
        case POST_ANSWER_REQUEST:
            return { ...state, posting: true };

        case POST_ANSWER_SUCCESS:
            return { ...state, answer: action.payload, posting: false };

        case POST_ANSWER_FAILURE:
            return { ...state, error: action.payload, posting: false };

    }
    return state;

}

export default postAnswerReducer;