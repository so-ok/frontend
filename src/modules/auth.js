import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import { requestLogin } from '../lib/api/auth';

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes('auth/LOGIN');
const SET_TOKEN = 'auth/SET_TOKEN';
const SET_ACCESS_TOKEN = 'auth/SET_ACCESS_TOKEN';
const CLEAR_TOKEN = 'auth/CLEAR_TOKEN';

export const doLogin = createAction(LOGIN, ({ username, password, onSuccess }) => ({
  username,
  password,
  onSuccess
}));

export const setToken = createAction(SET_TOKEN, ({ accessToken, refreshToken }) => ({
  accessToken,
  refreshToken
}));

export const clearToken = createAction(CLEAR_TOKEN);

export const setAccessToken = createAction(SET_ACCESS_TOKEN, (accessToken) => accessToken);

const doLoginSaga = createRequestSaga(LOGIN, requestLogin);

const initialState = {
  accessToken: null,
  refreshToken: null,
  error: false
};

export function* authSaga() {
  yield takeLatest(LOGIN, doLoginSaga);
}

const auth = handleActions(
  {
    [LOGIN_SUCCESS]: (state, { payload: { accessToken, refreshToken }, onSuccess }) => {
      onSuccess();
      return ({
        ...state,
        accessToken: accessToken,
        refreshToken: refreshToken,
        error: false
      })
    },
    [LOGIN_FAILURE]: (state) => ({
      ...state,
      error: true
    }),
    [SET_TOKEN]: (state, { payload: { accessToken, refreshToken } }) => ({
      ...state,
      accessToken: accessToken,
      refreshToken: refreshToken
    }),
    [SET_ACCESS_TOKEN]: (state, { payload }) => ({
      ...state,
      accessToken: payload
    }),
    [CLEAR_TOKEN]: (state) => initialState,
  },
  initialState,
);

export default auth;
