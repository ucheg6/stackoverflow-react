import axios from 'axios';
import {
    POST_COMMENT_REQUEST,
    POST_COMMENT_SUCCESS,
    POST_COMMENT_FAILURE,
    FETCH_COMMENT_SUCCESS,
} from './types';

import notify from '../helpers/notify';

/**
 * @description A function to dispatch an action on post comment success
 * 
 * @param {object} comment comment object
 * 
 * @return {Object} action dispatch by the action creator
 */
export const postCommentAction = (comment) => {
  return {
    type: POST_COMMENT_SUCCESS,
    payload: comment
  }
};

/**
 * @description A function to update comments
 * 
 * @param {object} comment comment object
 * 
 * @return {Object} action dispatch by the action creator
 */
export const updateCommentAction = (comment) => {
  return {
    type: 'UPDATE_COMMENT',
    payload: comment
  }
};


/**
 * @description A function to dispatch an action on post comment request
 * 
 * @param {boolean} isRequesting
 * 
 * @return {Object} action dispatch by the action creator
 */
export const requestCommentAction = (isRequesting) => {
  return {
    type: POST_COMMENT_REQUEST,
    payload: isRequesting
  }
};


/**
 * @description A function to dispatch an action on post comment error
 * 
 * @param {object} errors
 * 
 * @return {Object} action dispatch by the action creator
 */
export const postCommentError = (errors) => {
  return {
    type: POST_COMMENT_FAILURE,
    payload: errors
  }
};

/**
 * @description A function to post comment
 * 
 * @param {object} commentDetails
 * 
 * @return {Object} action dispatch by the action creator
 */
export const postComment = (commentDetails, id) => {
  return dispatch => {
    dispatch(requestCommentAction({ isRequesting: true }));
    dispatch(postCommentAction({ comment: {} }));
    dispatch(postCommentError({ error: {} }));

    const {
      comment
    } = commentDetails

    const commentInfo = {
        comment
      }
    return axios.post(`https://stackoverflow-litee.herokuapp.com/api/v1/questions/answers/${id}/comments`, {
        commentBody: commentDetails.comment
    }, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`
        }
      })
      .then(response => {
        dispatch(requestCommentAction({ isRequesting: false }));
        if (response) {
         const { data: { message } } = response;
         notify.success(message);
          dispatch(postCommentAction({comment: commentInfo }));
          dispatch(fetchComments(id));
          
        }
      })
      .catch(error => {
        const { response: { data: { message } } } = error;
        dispatch(requestCommentAction({ isRequesting: false }));
        dispatch(postCommentError({
          error: {
            message
          }
        }));
       notify.error(message);
      });
  }
};

export const fetchComments = (id) =>  dispatch => {
    fetch(`https://stackoverflow-litee.herokuapp.com/api/v1/questions/answers/${id}/comments`)
    .then(response => response.json())
    .then((data) => {
        return dispatch({
            type: FETCH_COMMENT_SUCCESS,
            payload: data.data,
        })
    });
}
