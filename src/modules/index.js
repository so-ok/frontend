import {combineReducers} from 'redux';
import {all} from 'redux-saga/effects';

import sample from './sample'

const rootReducer = combineReducers({
  sample
});

export function* rootSaga() {
  yield all([]);
}

export default rootReducer;
