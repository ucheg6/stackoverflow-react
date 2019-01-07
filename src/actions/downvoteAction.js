import axios from 'axios';
import {
    DOWNVOTE_REQUEST,
    DOWNVOTE_SUCCESS,
    DOWNVOTE_FAILURE,
} from './types';

import notify from '../helpers/notify';

/**
 * @description A function to dispatch an action on downvote success
 * 
 * @param {object} downvotes downvotes object
 * 
 * @return {Object} action dispatch by the action creator
 */
export const downvoteAction = (downvotes) => {
  return {
    type:  DOWNVOTE_SUCCESS,
    payload: downvotes
  }
};


/**
 * @description A function to dispatch an action on downvote request
 * 
 * @param {boolean} isRequesting
 * 
 * @return {Object} action dispatch by the action creator
 */
export const requestDownvoteAction = (isRequesting) => {
  return {
    type:  DOWNVOTE_REQUEST,
    payload: isRequesting
  }
};


/**
 * @description A function to dispatch an action on downvote error
 * 
 * @param {object} errors
 * 
 * @return {Object} action dispatch by the action creator
 */
export const downvoteError = (errors) => {
  return {
    type:  DOWNVOTE_FAILURE,
    payload: errors
  }
};

/**
 * @description A function to downvote an answer
 * 
 * @param {object} downvoteDetails downvotes object
 * 
 * @return {Object} action dispatch by the action creator
 */
export const downvote = (upvotesDetails, id, answerid) => {
  return dispatch => {
    dispatch(requestDownvoteAction({ isRequesting: true }));
    dispatch(downvoteAction({ downvotes: {} }));
    dispatch(downvoteError({ error: {} }));


    return axios.put(`https://stackoverflow-litee.herokuapp.com/api/v1/questions/${id}/answers/${answerid}/downvotes`, {},  {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`
        }
      })
      .then(response => {
        dispatch(requestDownvoteAction({ isRequesting: false }));
        if (response) {
         const { data: { message } } = response;
         notify.success(message);
          
        }
      })
      .catch(error => {
        const { response: { data: { message } } } = error;
        dispatch(requestDownvoteAction({ isRequesting: false }));
        dispatch(downvoteError({
          error: {
            message
          }
        }));
       notify.error(message);
      });
  }
};