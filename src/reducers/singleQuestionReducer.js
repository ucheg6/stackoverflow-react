import { 
    FETCH_SINGLE_QUESTION_REQUEST,
    FETCH_SINGLE_QUESTION_SUCCESS,
    FETCH_SINGLE_QUESTION_FAILURE
   } from '../actions/types';
  
  const initialState = {
    question: [],
    error: null,
    fetching: false
  }
  
  const singleQuestionReducer = (state = initialState, action) => {

    switch (action.type) {
      case FETCH_SINGLE_QUESTION_REQUEST:
        return { ...state, fetching: true };
  
      case FETCH_SINGLE_QUESTION_SUCCESS:
        return { ...state, question: action.payload, fetching: false };
  
      case FETCH_SINGLE_QUESTION_FAILURE:
        return { ...state, error: action.payload, fetching: false };
     
    }
    return state;
    
  }
  
  export default singleQuestionReducer;