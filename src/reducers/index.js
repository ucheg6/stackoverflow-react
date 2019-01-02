import { combineReducers } from 'redux';
import recentQuestionsReducer from './recentQuestionsReducer';
import userReducer from './userReducer';
import singleQuestionReducer from './singleQuestionReducer';
import mostPopularReducer from './mostPopularReducer';
export default combineReducers({
    recentQuestions: recentQuestionsReducer,
    auth: userReducer,
    singleQuestion: singleQuestionReducer,
    popularQuestions: mostPopularReducer,
});