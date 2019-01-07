import axios from 'axios';
import {
  USER_SIGNUP,
  REQUEST_SIGNUP,
  SIGNUP_ERRORS,

} from './types';
import notify from '../helpers/notify'
/**
 * @description A function to dispatch an action on user signup success
 * 
 * @param {object} user user object
 * 
 * @return {Object} action dispatch by the action creator
 */
export const signupAction = (user) => {
  return {
    type: USER_SIGNUP,
    payload: user
  }
};



/**
 * @description A function to dispatch an action on requesting user signup
 * 
 * @param {boolean} isRequesting
 * 
 * @return {Object} action dispatch by the action creator
 */
export const requestSignup = (isRequesting) => {
  return {
    type: REQUEST_SIGNUP,
    payload: isRequesting
  }
};

/**
 * @description A function to dispatch an action on user signup success
 * 
 * @param {object} isLoggedIn user object
 * 
 * @return {Object} action dispatch by the action creator
 */
export const loggedIn = (isLoggedIn) => {
  return {
    type: USER_LOGGEDIN,
    payload: isLoggedIn
  }
};

/**
 * @description A function to dispatch an action on user sigup error
 * 
 * @param {object} errors
 * 
 * @return {Object} action dispatch by the action creator
 */
export const signupError = (errors) => {
  return {
    type: SIGNUP_ERRORS,
    payload: errors
  }
};

/**
 * @description A function to sigup a user
 * 
 * @param {object} userDetails
 * @param {object} history
 * 
 * @return {Object} action dispatch by the action creator
 */
export const signup = (userDetails, history) => {
  return dispatch => {
    dispatch(requestSignup({ isRequesting: true }));
    dispatch(signupAction({ user: {} }));
    dispatch(signupError({ error: {} }));

    const {

      fullName,
      email,
      password,
    } = userDetails

    const userInfo = {
      fullName,
      email,
      password,
    }
    return axios.post('https://stackoverflow-litee.herokuapp.com/api/v1/auth/signup', {
      fullName: userDetails.fullName,
      email: userDetails.email,
      password: userDetails.password
    })
      .then(response => {
        dispatch(requestSignup({ isRequesting: false }));
        if (response) {
          const { data: { user } } = response;
          dispatch(signupAction({ user: userInfo }));
          history.push('/signin')
        }
      })
      .catch(error => {
        console.log(error);
        const { response: { status, data: { message } } } = error;
        dispatch(requestSignup({ isRequesting: false }));
        dispatch(signupError({
          error: {
            status,
            message
          }
        }));
       notify.error(message);
      });
  }
};