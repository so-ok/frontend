import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import pills, { pillListSaga } from './pills';
import loading from './loading';
import category from './category';
import listStyle from './listStyle';

import pillDetail, { pillDetailSaga } from './pillDetail';

const rootReducer = combineReducers({
  pillList: pills,
  loading,
  category,
  listStyle,
  pillDetail,
});

export function* rootSaga() {
  yield all([pillListSaga(), pillDetailSaga()]);
}

export default rootReducer;
