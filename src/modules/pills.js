import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as articleAPI from '../lib/api/articles';

const [GET_LIST, GET_LIST_SUCCESS, GET_LIST_FAILURE] =
  createRequestActionTypes('pills/GET_LIST');

export const addListAction = createAction(GET_LIST, (category) => ({ category }));

const getListSaga = createRequestSaga(GET_LIST, articleAPI.requestPillList);

const initialState = {
  list: [],
  pillListError: null,
};

export function* pillListSaga() {
  yield takeLatest(GET_LIST, getListSaga);
}

const pills = handleActions(
  {
    [GET_LIST_SUCCESS]: (state, { payload: list }) => ({
      ...state,
      list,
    }),
    [GET_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      pillListError: error,
    }),
  },
  initialState,
);

export default pills;
