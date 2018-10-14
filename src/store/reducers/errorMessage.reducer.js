import {
  LOGIN_USER_FAIL,
  FETCH_ALBUMS_FAIL,
  LOGIN_USER_START,
  FETCH_ALBUMS_START,
} from 'store/actions/types';

const initialState = '';

export const errorMessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_FAIL:
    case FETCH_ALBUMS_FAIL:
      return action.payload;
    case LOGIN_USER_START:
    case FETCH_ALBUMS_START:
      return initialState;
    default:
      return state;
  }
};
