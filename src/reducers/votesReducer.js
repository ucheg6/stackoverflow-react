import {
    UPVOTE_REQUEST,
    UPVOTE_SUCCESS,
    UPVOTE_FAILURE,
    DOWNVOTE_REQUEST,
    DOWNVOTE_SUCCESS,
    DOWNVOTE_FAILURE,
} from '../actions/types';

const initialState = {
    upvotes: [],
    downvotes: [],
    error: null,
    voting: false,
}

const votesReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPVOTE_REQUEST:
            return { ...state, voting: true };

        case UPVOTE_SUCCESS:
            return { ...state, upvotes: action.payload, voting: false };

        case UPVOTE_FAILURE:
            return { ...state, error: action.payload, voting: false };

        case DOWNVOTE_REQUEST:
            return { ...state, voting: true };

        case DOWNVOTE_SUCCESS:
            return { ...state, downvotes: action.payload, voting: false };

        case DOWNVOTE_FAILURE:
            return { ...state, error: action.payload, voting: false };

    }
    return state;

}

export default votesReducer;