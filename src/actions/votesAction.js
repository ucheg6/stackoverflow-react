import axios from 'axios';
import {
    UPVOTE_REQUEST,
    UPVOTE_SUCCESS,
    UPVOTE_FAILURE,
} from './types';

import notify from '../helpers/notify';

/**
 * @description A function to dispatch an action on upvote success
 * 
 * @param {object} votes votes object
 * 
 * @return {Object} action dispatch by the action creator
 */
export const upvoteAction = (upvotes) => {
  return {
    type: UPVOTE_SUCCESS,
    payload: upvotes
  }
};


/**
 * @description A function to dispatch an action on upvote request
 * 
 * @param {boolean} isRequesting
 * 
 * @return {Object} action dispatch by the action creator
 */
export const requestUpvoteAction = (isRequesting) => {
  return {
    type: UPVOTE_REQUEST,
    payload: isRequesting
  }
};


/**
 * @description A function to dispatch an action on upvote error
 * 
 * @param {object} errors
 * 
 * @return {Object} action dispatch by the action creator
 */
export const upvoteError = (errors) => {
  return {
    type: UPVOTE_FAILURE,
    payload: errors
  }
};

/**
 * @description A function to upvote an answer
 * 
 * @param {object} upvoteDetails upvotes object
 * 
 * @return {Object} action dispatch by the action creator
 */
export const upvote = (upvotesDetails, id, answerid) => {
  return dispatch => {
    dispatch(requestUpvoteAction({ isRequesting: true }));
    dispatch(upvoteAction({ upvotes: {} }));
    dispatch(upvoteError({ error: {} }));


    return axios.put(`https://stackoverflow-litee.herokuapp.com/api/v1/questions/${id}/answers/${answerid}/upvotes`, {},  {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`
        }
      })
      .then(response => {
        dispatch(requestUpvoteAction({ isRequesting: false }));
        if (response) {
         const { data: { message } } = response;
         notify.success(message);
          
        }
      })
      .catch(error => {
        const { response: { data: { message } } } = error;
        dispatch(requestUpvoteAction({ isRequesting: false }));
        dispatch(upvoteError({
          error: {
            message
          }
        }));
       notify.error(message);
      });
  }
};