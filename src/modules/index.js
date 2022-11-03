import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

import pillList, { pillListSaga } from "./PillList";
import sample from "./sample";

const rootReducer = combineReducers({
  sample,
  pillList,
});

export function* rootSaga() {
  yield all([pillListSaga()]);
}

export default rootReducer;
