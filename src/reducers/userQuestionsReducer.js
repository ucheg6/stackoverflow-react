import { 
    FETCH_USER_QUESTIONS_REQUEST,
    FETCH_USER_QUESTIONS_SUCCESS,
    FETCH_USER_QUESTIONS_FAILURE,
   } from '../actions/types';
  
  const initialState = {
    questions: [],
    error: null,
    fetching: false
  }
  
  const userQuestionsReducer = (state = initialState, action) => {

    switch (action.type) {
      case FETCH_USER_QUESTIONS_REQUEST:
        return { ...state, fetching: true };
  
      case FETCH_USER_QUESTIONS_SUCCESS:
        return { ...state, questions: action.payload, fetching: false };
  
      case FETCH_USER_QUESTIONS_FAILURE:
        return { ...state, error: action.payload, fetching: false };
     case 'UPDATE_USER_QUESTIONS':
     return { ...state, questions: [action.payload, ...state.questions]}
     case 'DELETE_USER_QUESTIONS_SUCCESS':
     return { 
       ...state,
       questions: state.questions.filter((question) => question.questionid !== action.payload)
      }
    }
    return state;
    
  }
  
  export default userQuestionsReducer;