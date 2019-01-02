import { FETCH_POPULAR_QUESTIONS_SUCCESS } from  './types';

export const fetchPopularQuestions = () =>  dispatch => {
    fetch('https://stackoverflow-litee.herokuapp.com/api/v1/questions/mostanswers')
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        return dispatch({
            type: FETCH_POPULAR_QUESTIONS_SUCCESS,
            payload: data.data,
        })
    });
}
