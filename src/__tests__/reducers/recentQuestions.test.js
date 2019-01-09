import recentQuestionsReducer from '../../reducers/recentQuestionsReducer';
import * as types from '../../actions/types';

describe('recent questions', () => {
  it('should have a default state', () => {
    expect(recentQuestionsReducer(undefined, {
      type: 'non-existent type'
    })).toEqual({
        questions: [],
        error: null,
        fetching: false
    });
  });

  it('should update recent questions state while loading', () => {
    expect(recentQuestionsReducer(undefined, {
      type: types.FETCH_RECENT_QUESTIONS_REQUEST
    })).toEqual({
      questions: [],
        error: null,
        fetching: true
    });
  });

  it('should fail to update recent questions state', () => {
    expect(recentQuestionsReducer(undefined, {
      type: types.FETCH_RECENT_QUESTIONS_FAILURE,
    })).toEqual({
      error: undefined,
      fetching: false,
      questions: [],
    });
  });

  it('should update user questions state', () => {
    expect(recentQuestionsReducer(undefined, {
      type: types.FETCH_RECENT_QUESTIONS_SUCCESS,
      questions: []
    })).toEqual({
      error: null,
      fetching: false,
      questions: undefined,
    });
  });

});

