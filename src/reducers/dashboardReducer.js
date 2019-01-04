import { 
    FETCH_USER_PROFILE_REQUEST,
    FETCH_USER_PROFILE_SUCCESS,
    FETCH_USER_PROFILE_FAILURE
   } from '../actions/types';
  
  const initialState = {
    profile: [],
    error: null,
    fetching: false
  }
  
  const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USER_PROFILE_REQUEST:
        return { ...state, fetching: true };
  
      case FETCH_USER_PROFILE_SUCCESS:
        return { ...state, profile: action.payload, fetching: false };
  
      case FETCH_USER_PROFILE_FAILURE:
        return { ...state, error: action.payload, fetching: false };
     
    }
    return state;
  }
  
  export default dashboardReducer;