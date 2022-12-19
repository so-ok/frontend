import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import cart from './cart';
import category from './category';
import listStyle from './listStyle';
import loading from './loading';
import pills, { pillListSaga } from './pills';

import pillDetail, { pillDetailSaga } from './pillDetail';
import pillIngredient, { cartPillListSaga, pillIngredientSaga } from './pillIngredient';

const rootReducer = combineReducers({
  pillList: pills,
  loading,
  category,
  listStyle,
  pillDetail,
  pillIngredient,
  cart,
});

export function* rootSaga() {
  yield all([pillListSaga(), pillDetailSaga(), pillIngredientSaga(), cartPillListSaga()]);
}

export default rootReducer;
