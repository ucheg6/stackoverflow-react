import { FETCH_USER_PROFILE_SUCCESS } from  './types';

export const fetchUserProfile = () =>  dispatch => {
    const token = `Bearer ${localStorage.getItem('userToken')}`;
    const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
    
      };
    
    fetch('https://stackoverflow-litee.herokuapp.com/api/v1/user', options)
    .then(response => response.json())
    .then((data) => {
        return dispatch({
            type: FETCH_USER_PROFILE_SUCCESS,
            payload: data,
        })
    });
}
