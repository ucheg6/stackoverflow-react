import { 
    USER_SIGNUP, SIGNUP_ERRORS,
  } from '../actions/types';
  
  const userReducer = (state = {}, action) => {
    switch (action.type) {

      case USER_SIGNUP:
        return { ...state, ...action.payload };
  
      case SIGNUP_ERRORS:
        return { ...state, ...action.payload };      
    }
    return state;
  }
  
  export default userReducer;
  