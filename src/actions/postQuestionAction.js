import axios from 'axios';
import {
    POST_QUESTION_REQUEST,
    POST_QUESTION_SUCCESS,
    POST_QUESTION_FAILURE,
} from './types';
import notify from '../helpers/notify';
import { fetchUserQuestions } from './userQuestionsAction';

/**
 * @description A function to dispatch an action on post question success
 * 
 * @param {object} question question object
 * 
 * @return {Object} action dispatch by the action creator
 */
export const postQuestionAction = (question) => {
  return {
    type: POST_QUESTION_SUCCESS,
    payload: question
  }
};

/**
 * @description A function to update user questions
 * 
 * @param {object} question question object
 * 
 * @return {Object} action dispatch by the action creator
 */
export const updateUserQuestionAction = (question) => {
  return {
    type: 'UPDATE_USER_QUESTIONS',
    payload: question
  }
};


/**
 * @description A function to dispatch an action on post question request
 * 
 * @param {boolean} isRequesting
 * 
 * @return {Object} action dispatch by the action creator
 */
export const requestPostQuestion = (isRequesting) => {
  return {
    type: POST_QUESTION_REQUEST,
    payload: isRequesting
  }
};


/**
 * @description A function to dispatch an action on post question error
 * 
 * @param {object} errors
 * 
 * @return {Object} action dispatch by the action creator
 */
export const postQuestionError = (errors) => {
  return {
    type: POST_QUESTION_FAILURE,
    payload: errors
  }
};

/**
 * @description A function to post question 
 * 
 * @param {object} userDetails
 * @param {object} history
 * 
 * @return {Object} action dispatch by the action creator
 */
export const postQuestion = (questionDetails) => {
  return dispatch => {
    dispatch(requestPostQuestion({ isRequesting: true }));
    dispatch(postQuestionAction({ question: {} }));
    dispatch(postQuestionError({ error: {} }));

    const {
      topic,
      question,
    } = questionDetails

    const questionInfo = {
        topic,
      question,
      }
    return axios.post('https://stackoverflow-litee.herokuapp.com/api/v1/questions', {
      questionTopic: questionDetails.topic,
      questionBody: questionDetails.question
    }, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`
        }
      })
      .then(response => {
        dispatch(requestPostQuestion({ isRequesting: false }));
        if (response) {
         const { data: { message } } = response;
         notify.success(message);
          dispatch(postQuestionAction({ question: questionInfo }));
          dispatch(fetchUserQuestions());
          
          
        }
      })
      .catch(error => {
        const { response: { data: { message } } } = error;
        dispatch(requestPostQuestion({ isRequesting: false }));
        dispatch(postQuestionError({
          error: {
            message
          }
        }));
       notify.error(message);
      });
  }
};