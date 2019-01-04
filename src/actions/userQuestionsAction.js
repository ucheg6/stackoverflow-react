import { FETCH_USER_QUESTIONS_SUCCESS } from  './types';

export const fetchUserQuestions = () =>  dispatch => {
    const token = `Bearer ${localStorage.getItem('userToken')}`;
    const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
    
      };
    fetch('https://stackoverflow-litee.herokuapp.com/api/v1/user/questions', options)
    .then(response => response.json())
    .then((data) => {
        return dispatch({
            type: FETCH_USER_QUESTIONS_SUCCESS,
            payload: data.data,
        })
    });
}
