import {
  FETCH_SINGLE_QUESTION_REQUEST,
  FETCH_SINGLE_QUESTION_FAILURE,
  FETCH_SINGLE_QUESTION_SUCCESS,
} from './types';
import axios from 'axios';
import notify from '../helpers/notify';

export const singleQuestionAction = (data) => {
  return {
    type: FETCH_SINGLE_QUESTION_SUCCESS,
    payload: data
  }
};

export const singleQuestionError = (error) => {
  return {
    type: FETCH_SINGLE_QUESTION_FAILURE,
    payload: error
  }
};

export const singleQuestionRequest = (fetching) => {
  return {
    type: FETCH_SINGLE_QUESTION_REQUEST,
    payload: fetching
  }
};

export const fetchSingleQuestion = (id) => {
  return dispatch => {
    dispatch(singleQuestionRequest({ fetching: true }));
    dispatch(singleQuestionError({error: {} }));
    dispatch(singleQuestionAction({data: {} }));
    return axios.get(`https://stackoverflow-litee.herokuapp.com/api/v1/questions/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('userToken')}`
      }
    })
      .then(response => {
        if (response) {
          const  { data }  = response;
          dispatch(singleQuestionRequest({ fetching: false }));
          dispatch(singleQuestionAction({data}));
        }
      }).catch(error => {
        const { response: { data: { message } } } = error;
        dispatch(singleQuestionRequest({ fetching: false }));
        dispatch(singleQuestionError({
          error: {
            message
          }
        }));
        notify.error(message);
      });
  }
}