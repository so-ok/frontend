import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as articleAPI from '../lib/api/articles';

const [GET_PILL, GET_PILL_SUCCESS, GET_PILL_FAILURE] =
  createRequestActionTypes('pills/GET_PILL');

export const getPillDetail = createAction(GET_PILL, (id) => ({ id }));

const getPillSaga = createRequestSaga(GET_PILL, articleAPI.requestPillDetail);

const initialState = {
  pillDetail: [],
  pillListError: null,
};

export function* pillDetailSaga() {
  yield takeLatest(GET_PILL, getPillSaga);
}

const pillDetail = handleActions(
  {
    [GET_PILL_SUCCESS]: (state, { payload: pillDetail }) => ({
      ...state,
      pillDetail: pillDetail,
    }),
    [GET_PILL_FAILURE]: (state, { payload: error }) => ({
      ...state,
      pillListError: error,
    }),
  },
  initialState,
);

export default pillDetail;
