import axios from 'axios';
import {
    POST_ANSWER_REQUEST,
    POST_ANSWER_SUCCESS,
    POST_ANSWER_FAILURE,
} from './types';
import notify from '../helpers/notify';
import { fetchSingleQuestion } from './singleQuestionAction';

/**
 * @description A function to dispatch an action on post answer success
 * 
 * @param {object} answer answer object
 * 
 * @return {Object} action dispatch by the action creator
 */
export const postAnswerAction = (answer) => {
  return {
    type: POST_ANSWER_SUCCESS,
    payload: answer
  }
};

/**
 * @description A function to update answers
 * 
 * @param {object} answer answer object
 * 
 * @return {Object} action dispatch by the action creator
 */
export const updateAnswerAction = (answer) => {
  return {
    type: 'UPDATE_ANSWER',
    payload: answer
  }
};


/**
 * @description A function to dispatch an action on post answer request
 * 
 * @param {boolean} isRequesting
 * 
 * @return {Object} action dispatch by the action creator
 */
export const requestPostAnswer = (isRequesting) => {
  return {
    type: POST_ANSWER_REQUEST,
    payload: isRequesting
  }
};


/**
 * @description A function to dispatch an action on post answer error
 * 
 * @param {object} errors
 * 
 * @return {Object} action dispatch by the action creator
 */
export const postAnswerError = (errors) => {
  return {
    type: POST_ANSWER_FAILURE,
    payload: errors
  }
};

/**
 * @description A function to post answer 
 * 
 * @param {object} answerDetails
 * 
 * @return {Object} action dispatch by the action creator
 */
export const postAnswer = (answerDetails, id) => {
  return dispatch => {
    dispatch(requestPostAnswer({ isRequesting: true }));
    dispatch(postAnswerAction({ answer: {} }));
    dispatch(postAnswerError({ error: {} }));

    const {
      answer
    } = answerDetails

    const answerInfo = {
        answer
      }
    return axios.post(`https://stackoverflow-litee.herokuapp.com/api/v1/questions/${id}/answers`, {
        answer: answerDetails.answer
    }, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`
        }
      })
      .then(response => {
        dispatch(requestPostAnswer({ isRequesting: false }));
        if (response) {
         const { data: { message } } = response;
         notify.success(message);
          dispatch(postAnswerAction({answer: answerInfo }));
          dispatch(fetchSingleQuestion(id));
          
        }
      })
      .catch(error => {
        const { response: { data: { message } } } = error;
        dispatch(requestPostAnswer({ isRequesting: false }));
        dispatch(postAnswerError({
          error: {
            message
          }
        }));
       notify.error(message);
      });
  }
};