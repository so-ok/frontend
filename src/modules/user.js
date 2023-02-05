import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import { requestUser } from '../lib/api/articles';

const [GET_USER, GET_USER_SUCCESS, GET_USER_FAILURE] = createRequestActionTypes('user/GET_USER');

export const getUser = createAction(GET_USER);

const getUserSaga = createRequestSaga(GET_USER, requestUser);

const initialState = {
  user: {},
  gerUserError: null,
};

export function* userSaga() {
  yield takeLatest(GET_USER, getUserSaga);
}

const user = handleActions(
  {
    [GET_USER_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user: user,
    }),
    [GET_USER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      getUserError: error,
    })
  },
  initialState,
);

export default user;
