import axios from 'axios';
import {
    ACCEPT_ANSWER_REQUEST,
    ACCEPT_ANSWER_SUCCESS,
    ACCEPT_ANSWER_FAILURE,
} from './types';

import notify from '../helpers/notify';

/**
 * @description A function to dispatch an action to accept an answer
 * 
 * @param {object} answer answer object
 * 
 * @return {Object} action dispatch by the action creator
 */
export const acceptAnswerAction = (answer) => {
  return {
    type: ACCEPT_ANSWER_SUCCESS,
    payload: answer
  }
};


/**
 * @description A function to dispatch an action on accept answer request
 * 
 * @param {boolean} isRequesting
 * 
 * @return {Object} action dispatch by the action creator
 */
export const requestAcceptAnswer = (isRequesting) => {
  return {
    type: ACCEPT_ANSWER_REQUEST,
    payload: isRequesting
  }
};


/**
 * @description A function to dispatch an action on accept answer error
 * 
 * @param {object} errors
 * 
 * @return {Object} action dispatch by the action creator
 */
export const acceptAnswerError = (errors) => {
  return {
    type: ACCEPT_ANSWER_FAILURE,
    payload: errors
  }
};

/**
 * @description A function to accept an answer
 * 
 * 
 * @return {Object} action dispatch by the action creator
 */
export const acceptAnswer = (id, answerid) => {
  return dispatch => {
    dispatch(requestAcceptAnswer({ isRequesting: true }));
    dispatch(acceptAnswerAction({ answer: {} }));
    dispatch(acceptAnswerError({ error: {} }));


    return axios.put(`https://stackoverflow-litee.herokuapp.com/api/v1/questions/${id}/answers/${answerid}`, {},  {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`
        }
      })
      .then(response => {
        dispatch(acceptAnswerAction({ isRequesting: false }));
      })
      .catch(error => {
        const { response: { data: { message } } } = error;
        dispatch(requestAcceptAnswer({ isRequesting: false }));
        dispatch(acceptAnswerError({
          error: {
            message
          }
        }));
       notify.error(message);
      });
  }
};