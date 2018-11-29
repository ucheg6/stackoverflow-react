import { combineReducers } from 'redux';
import recentQuestionsReducer from './recentQuestionsReducer';
import userReducer from './userReducer';

export default combineReducers({
    recentQuestions: recentQuestionsReducer,
    auth: userReducer
});