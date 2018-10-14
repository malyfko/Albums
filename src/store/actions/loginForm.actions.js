import firebase from 'firebase';

export const EMAIL_CHANGED = 'EMAIL_CHANGED';
export const PASSWORD_CHANGED = 'PASSWORD_CHANGED';
export const CLEAR_LOGIN_FORM = 'CLEAR_LOGIN_FORM';
export const LOGIN_USER_START = 'LOGIN_USER_START';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';

export const changeEmail = (email) => ({
  type: EMAIL_CHANGED,
  payload: email,
});

export const changePassword = (password) => ({
  type: PASSWORD_CHANGED,
  payload: password,
});

export const clearLoginForm = () => ({
  type: CLEAR_LOGIN_FORM,
});

const loginUserStart = () => ({
  type: LOGIN_USER_START,
});

const loginUserSuccess = (user) => ({
  type: LOGIN_USER_SUCCESS,
  payload: user,
});

const loginUserFail = (error) => ({
  type: LOGIN_USER_FAIL,
  payload: error.message,
});

const handleUserLoginSuccess = (dispatch, user) => {
  dispatch(loginUserSuccess(user));
  dispatch(clearLoginForm());
};

export const loginUser = ({ email, password }) =>
  (dispatch) => {
    dispatch(loginUserStart());

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        handleUserLoginSuccess(dispatch, user);
      })
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((user) => {
            handleUserLoginSuccess(dispatch, user);
          })
          .catch((error) => {
            dispatch(loginUserFail(error));
          });
      });
  };
