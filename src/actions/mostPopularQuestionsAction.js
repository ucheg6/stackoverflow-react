import { FETCH_POPULAR_QUESTIONS_SUCCESS,
    FETCH_POPULAR_QUESTIONS_REQUEST } 
from  './types';

export const fetchPopularQuestions = () =>  dispatch => {
    dispatch({
        type: FETCH_POPULAR_QUESTIONS_REQUEST,
        fetching: true,
    });
    fetch('https://stackoverflow-litee.herokuapp.com/api/v1/questions/mostanswers')
    .then(response => response.json())
    .then((data) => {
        return dispatch({
            type: FETCH_POPULAR_QUESTIONS_SUCCESS,
            payload: data.data,
        })
    });
}
