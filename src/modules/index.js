import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import pills, { pillListSaga } from './pills';
import loading from './loading';
import category from './category';
import listStyle from './listStyle';

const rootReducer = combineReducers({
  pillList: pills,
  loading,
  category,
  listStyle,
});

export function* rootSaga() {
  yield all([pillListSaga()]);
}

export default rootReducer;
