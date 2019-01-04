import {
    POST_QUESTION_REQUEST,
    POST_QUESTION_SUCCESS,
    POST_QUESTION_FAILURE
} from '../actions/types';

const initialState = {
    question: null,
    error: null,
    posting: false
}

const postQuestionReducer = (state = initialState, action) => {

    switch (action.type) {
        case POST_QUESTION_REQUEST:
            return { ...state, posting: true };

        case POST_QUESTION_SUCCESS:
            return { ...state, question: action.payload, posting: false };

        case POST_QUESTION_FAILURE:
            return { ...state, error: action.payload, posting: false };

    }
    return state;

}

export default postQuestionReducer;