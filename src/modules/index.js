import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import pills, { pillListSaga } from './pills';
import sample from './sample';
import loading from './loading';

const rootReducer = combineReducers({
  sample,
  pillList: pills,
  loading,
});

export function* rootSaga() {
  yield all([pillListSaga()]);
}

export default rootReducer;
