import {
    POST_COMMENT_REQUEST,
    POST_COMMENT_SUCCESS,
    POST_COMMENT_FAILURE,
    FETCH_COMMENT_REQUEST,
    FETCH_COMMENT_SUCCESS,
    FETCH_COMMENT_FAILURE,
} from '../actions/types';

const initialState = {
    comment: null,
    comments: [],
    error: null,
    posting: false,
    fetching: false
}

const commentsReducer = (state = initialState, action) => {

    switch (action.type) {
        case POST_COMMENT_REQUEST:
            return { ...state, posting: true };

        case POST_COMMENT_SUCCESS:
            return { ...state, comment: action.payload, posting: false };

        case POST_COMMENT_FAILURE:
            return { ...state, error: action.payload, posting: false };

        case FETCH_COMMENT_REQUEST:
            return { ...state, posting: true };

        case FETCH_COMMENT_SUCCESS:
            return { ...state, comments: action.payload, posting: false };

        case FETCH_COMMENT_FAILURE:
            return { ...state, error: action.payload, posting: false };

        case 'UPDATE_COMMENT':
            return { ...state, comments: [action.payload, ...state.comments]}
    }
    return state;

}

export default commentsReducer;