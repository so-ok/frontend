import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import { requestPillDetail } from '../lib/api/articles';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';

const [GET_PILL, GET_PILL_SUCCESS, GET_PILL_FAILURE] = createRequestActionTypes('pills/GET_PILL');

export const getPillDetail = createAction(GET_PILL, id => ({ id }));

const getPillSaga = createRequestSaga(GET_PILL, requestPillDetail);

const initialState = {
  pillDetail: [],
  pillDetailError: null,
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
      pillDetailError: error,
    }),
  },
  initialState,
);

export default pillDetail;
