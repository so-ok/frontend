import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import pills, { pillListSaga } from './pills';
import loading from './loading';
import category from './category';

const rootReducer = combineReducers({
  pillList: pills,
  loading,
  category,
});

export function* rootSaga() {
  yield all([pillListSaga()]);
}

export default rootReducer;
