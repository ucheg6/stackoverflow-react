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

export const deleteUserQuestions = (id) =>  dispatch => {
    const token = `Bearer ${localStorage.getItem('userToken')}`;
    const options = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
    
      };
    fetch(`https://stackoverflow-litee.herokuapp.com/api/v1/questions/${id}`, options)
    .then(response => response.json())
    .then((data) => {
        return dispatch({
            type: 'DELETE_USER_QUESTIONS_SUCCESS',
            payload: id,
        })
    });
}
