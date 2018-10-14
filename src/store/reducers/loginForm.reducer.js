import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  CLEAR_LOGIN_FORM,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_START,
} from 'store/actions/types';

const initialState = {
  email: '',
  password: '',
  user: null,
  loading: false,
};

export const loginFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return {
        ...state,
        email: action.payload,
      };
    case PASSWORD_CHANGED:
      return {
        ...state,
        password: action.payload,
      };
    case LOGIN_USER_START:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        loading: false,
      };
    case CLEAR_LOGIN_FORM:
      return {
        ...state,
        email: initialState.email,
        password: initialState.password,
      };
    default:
      return state;
  }
};
