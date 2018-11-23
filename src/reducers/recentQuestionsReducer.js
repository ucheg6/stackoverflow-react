import { FETCH_RECENT_QUESTIONS } from  '../actions/types';

const initialState = {
    questions: [],
}

const recentQuestionsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_RECENT_QUESTIONS:
        return { ...state, questions: action.payload };
      
    }
    return state;
  }
  
export default recentQuestionsReducer;