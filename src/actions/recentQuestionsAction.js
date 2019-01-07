import { FETCH_RECENT_QUESTIONS_SUCCESS,
    FETCH_RECENT_QUESTIONS_REQUEST
} from  './types';

export const fetchRecentQuestions = () =>  dispatch => {
    dispatch({
        type: FETCH_RECENT_QUESTIONS_REQUEST,
        fetching: true,
    });
    fetch('https://stackoverflow-litee.herokuapp.com/api/v1/questions')
    .then(response => response.json())
    .then((data) => {
        return dispatch({
            type: FETCH_RECENT_QUESTIONS_SUCCESS,
            payload: data.data,
        })
    });
}
