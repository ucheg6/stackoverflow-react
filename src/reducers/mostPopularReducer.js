import { 
    FETCH_POPULAR_QUESTIONS_REQUEST,
    FETCH_POPULAR_QUESTIONS_SUCCESS,
    FETCH_POPULAR_QUESTIONS_FAILURE
   } from '../actions/types';
  
  const initialState = {
    questions: [],
    error: null,
    fetching: false
  }
  
  const popularQuestionsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_POPULAR_QUESTIONS_REQUEST:
        return { ...state, fetching: true };
  
      case FETCH_POPULAR_QUESTIONS_SUCCESS:
        return { ...state, questions: action.payload, fetching: false };
  
      case FETCH_POPULAR_QUESTIONS_FAILURE:
        return { ...state, error: action.payload, fetching: false };
     
    }
    return state;
  }
  
  export default popularQuestionsReducer;