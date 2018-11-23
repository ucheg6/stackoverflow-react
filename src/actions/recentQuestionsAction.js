import { FETCH_RECENT_QUESTIONS } from  './types';

export const fetchRecentQuestions = () =>  dispatch => {
    fetch('https://stackoverflow-litee.herokuapp.com/api/v1/questions')
    .then(response => response.json())
    .then((data) => {
        return dispatch({
            type: FETCH_RECENT_QUESTIONS,
            payload: data.data,
        })
    });
}
