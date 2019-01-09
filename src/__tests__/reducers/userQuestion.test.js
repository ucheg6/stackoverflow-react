import userQuestionsReducer from '../../reducers/userQuestionsReducer';
import * as types from '../../actions/types';

describe('user questions', () => {
  it('should have a default state', () => {
    expect(userQuestionsReducer(undefined, {
      type: 'non-existent type'
    })).toEqual({
        questions: [],
        error: null,
        fetching: false
    });
  });

  it('should update user questions state while loading', () => {
    expect(userQuestionsReducer(undefined, {
      type: types.FETCH_USER_QUESTIONS_REQUEST
    })).toEqual({
      questions: [],
        error: null,
        fetching: true
    });
  });

  it('should fail to update user questions state', () => {
    expect(userQuestionsReducer(undefined, {
      type: types.FETCH_USER_QUESTIONS_FAILURE,
    })).toEqual({
      error: undefined,
      fetching: false,
      questions: [],
    });
  });

  it('should update user questions state', () => {
    expect(userQuestionsReducer(undefined, {
      type: types.FETCH_USER_QUESTIONS_SUCCESS,
      questions: []
    })).toEqual({
      error: null,
      fetching: false,
      questions: undefined,
    });
  });
  it('should update user questions state', () => {
    expect(userQuestionsReducer(undefined, {
      type: 'UPDATE_USER_QUESTIONS',
      questions: []
    })).toEqual({
      error: null,
      fetching: false,
      questions: [undefined],
    });
  });
  it('should delete user questions state', () => {
    expect(userQuestionsReducer(undefined, {
      type: 'DELETE_USER_QUESTIONS_SUCCESS',
      questions: []
    })).toEqual({
      error: null,
      fetching: false,
      questions: [],
    });
  });
});

