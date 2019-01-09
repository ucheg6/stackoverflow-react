import dashboardReducer from '../../reducers/dashboardReducer';
import * as types from '../../actions/types';

describe('popular questions', () => {
  it('should have a default state', () => {
    expect(dashboardReducer(undefined, {
      type: 'non-existent type'
    })).toEqual({
        profile: [],
        error: null,
        fetching: false
    });
  });

  it('should update recent questions state while loading', () => {
    expect(dashboardReducer(undefined, {
      type: types.FETCH_USER_PROFILE_REQUEST
    })).toEqual({
        profile: [],
        error: null,
        fetching: true
    });
  });

  it('should fail to update recent questions state', () => {
    expect(dashboardReducer(undefined, {
      type: types.FETCH_USER_PROFILE_FAILURE,
    })).toEqual({
      error: undefined,
      fetching: false,
      profile: [],
    });
  });

  it('should update user questions state', () => {
    expect(dashboardReducer(undefined, {
      type: types.FETCH_USER_PROFILE_SUCCESS,
      profile: [],
    })).toEqual({
      error: null,
      fetching: false,
      profile: undefined,
    });
  });

});

