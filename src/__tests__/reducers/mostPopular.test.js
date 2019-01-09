import popularQuestionsReducer from '../../reducers/mostPopularReducer';
import * as types from '../../actions/types';

describe('popular questions', () => {
  it('should have a default state', () => {
    expect(popularQuestionsReducer(undefined, {
      type: 'non-existent type'
    })).toEqual({
        questions: [],
        error: null,
        fetching: false
    });
  });

  it('should update recent questions state while loading', () => {
    expect(popularQuestionsReducer(undefined, {
      type: types.FETCH_POPULAR_QUESTIONS_REQUEST
    })).toEqual({
      questions: [],
        error: null,
        fetching: true
    });
  });

  it('should fail to update recent questions state', () => {
    expect(popularQuestionsReducer(undefined, {
      type: types.FETCH_POPULAR_QUESTIONS_FAILURE,
    })).toEqual({
      error: undefined,
      fetching: false,
      questions: [],
    });
  });

  it('should update user questions state', () => {
    expect(popularQuestionsReducer(undefined, {
      type: types.FETCH_POPULAR_QUESTIONS_SUCCESS,
      questions: []
    })).toEqual({
      error: null,
      fetching: false,
      questions: undefined,
    });
  });

});

