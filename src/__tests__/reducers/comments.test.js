import commentsReducer from '../../reducers/commentsReducer';
import * as types from '../../actions/types';

describe('comments', () => {
  it('should have a default state', () => {
    expect(commentsReducer(undefined, {
      type: 'non-existent type'
    })).toEqual({
        comment: null,
        comments: [],
        error: null,
        posting: false,
        fetching: false
    });
  });

  it('should update recent comment while loading', () => {
    expect(commentsReducer(undefined, {
      type: types.FETCH_COMMENT_REQUEST
    })).toEqual({
        comment: null,
        comments: [],
        error: null,
        posting: true,
        fetching: false

    });
  });

  it('should fail to update comment state', () => {
    expect(commentsReducer(undefined, {
      type: types.FETCH_COMMENT_FAILURE,
    })).toEqual({
        comment: null,
        comments: [],
        error: undefined,
        posting: false,
        fetching: false
    });
  });

  it('should update comment state', () => {
    expect(commentsReducer(undefined, {
      type: types.FETCH_COMMENT_SUCCESS,
      comment: [],
    })).toEqual({
        comment: null,
        comments: undefined,
        error: null,
        posting: false,
        fetching: false
    });
  });
  it('should update comment state', () => {
    expect(commentsReducer(undefined, {
      type: 'UPDATE_COMMENT',
      comment: [],
    })).toEqual({
        comment: null,
        comments: [undefined],
        error: null,
        posting: false,
        fetching: false
    });
  });

});

