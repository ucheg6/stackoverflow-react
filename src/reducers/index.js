import { combineReducers } from 'redux';
import recentQuestionsReducer from './recentQuestionsReducer';
import userReducer from './userReducer';
import singleQuestionReducer from './singleQuestionReducer';
import mostPopularReducer from './mostPopularReducer';
import dashboardReducer from './dashboardReducer';
import userQuestionsReducer from './userQuestionsReducer';
import postQuestionReducer from './postQuestionReducer';
import postAnswerReducer from './answerReducer';
import commentsReducer from './commentsReducer';

export default combineReducers({
    recentQuestions: recentQuestionsReducer,
    auth: userReducer,
    singleQuestion: singleQuestionReducer,
    popularQuestions: mostPopularReducer,
    user: dashboardReducer,
    userQuestions: userQuestionsReducer,
    postQuestion: postQuestionReducer,
    postAnswer: postAnswerReducer,
    postComments: commentsReducer,
});