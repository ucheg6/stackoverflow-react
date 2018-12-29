import axios from 'axios';
import {
  USER_SIGNIN,
  REQUEST_SIGNIN,
  SIGNIN_ERRORS,
} from './types';
import notify from '../helpers/notify';

/**
 * @description A function to dispatch an action on user signin success
 * 
 * @param {object} user user object
 * 
 * @return {Object} action dispatch by the action creator
 */
export const signinAction = (user) => {
  return {
    type: USER_SIGNIN,
    payload: user
  }
};


/**
 * @description A function to dispatch an action on requesting user signin
 * 
 * @param {boolean} isRequesting
 * 
 * @return {Object} action dispatch by the action creator
 */
export const requestSignin = (isRequesting) => {
  return {
    type: REQUEST_SIGNIN,
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
export const signinError = (errors) => {
  return {
    type: SIGNIN_ERRORS,
    payload: errors
  }
};

/**
 * @description A function to signin a user
 * 
 * @param {object} userDetails
 * @param {object} history
 * 
 * @return {Object} action dispatch by the action creator
 */
export const login = (userDetails, history) => {
  return dispatch => {
    dispatch(requestSignin({ isRequesting: true }));
    dispatch(signinAction({ user: {} }));
    dispatch(signinError({ error: {} }));

    const {
      email,
      password,
    } = userDetails

    const userInfo = {
      email,
      password,
    }
    return axios.post('https://stackoverflow-litee.herokuapp.com/api/v1/auth/login', {
      email: userDetails.email,
      password: userDetails.password
    })
      .then(response => {
        dispatch(requestSignin({ isRequesting: false }));
        if (response) {
         const { data: { user, token } } = response;
        console.log(response);
          dispatch(signinAction({ user: userInfo }));
          //notify.success(`Welcome ${user}`);
          localStorage.setItem('userToken', token);
          history.push('/home')
        }
      })
      .catch(error => {
        console.log(error);
        const { response: { status, data: { message } } } = error;
        dispatch(requestSignin({ isRequesting: false }));
        dispatch(signinError({
          error: {
            status,
            message
          }
        }));
       notify.error(message);
      });
  }
};