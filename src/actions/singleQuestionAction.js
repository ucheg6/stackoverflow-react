import { FETCH_SINGLE_QUESTION } from  './types';
import axios from 'axios';

export const singleQuestionAction = (token) => {
  return {
    type: FETCH_SINGLE_QUESTION,
    payload: token
  }
};

export const singleQuestionError = (error) => {
  return {
    type: FETCH_SINGLE_QUESTION,
    payload: error
  }
};

export const fetchSingleQuestion=(id)=>{
    return dispatch => {
    dispatch(singleQuestionError(null));
    dispatch(singleQuestionAction({ accessToken: {} }));
    return axios.get(`https://stackoverflow-litee.herokuapp.com/api/v1/questions/${id}`)
      .then(response => {
        if (response) {
            console.log(response);
          const { data: { access_token} } = response;
        dispatch(singleQuestionAction({accessToken:access_token }));

        }
      }).catch(error => {
        const { response: { data: {code, message } } } = error;
        dispatch(singleQuestionError({
          error:{
              message
          }
        }));
      });
  }
}


