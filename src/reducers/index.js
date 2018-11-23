import { combineReducers } from 'redux';
import recentQuestionsReducer from './recentQuestionsReducer';


export default combineReducers({
    recentQuestions: recentQuestionsReducer
});