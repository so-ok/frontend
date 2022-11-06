import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import pillList, { pillListSaga } from './pillList';
import sample from './sample';
import loading from './loading';

const rootReducer = combineReducers({
  sample,
  pillList,
  loading,
});

export function* rootSaga() {
  yield all([pillListSaga()]);
}

export default rootReducer;
