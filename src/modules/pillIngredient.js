import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import { requestCartIngredient, requestCartPillList } from '../lib/api/articles';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';

const [GET_INGREDIENT, GET_INGREDIENT_SUCCESS, GET_INGREDIENT_FAILURE] =
  createRequestActionTypes('pills/GET_INGREDIENT');

const [GET_CART, GET_CART_SUCCESS, GET_CART_FAILURE] = createRequestActionTypes('pills/GET_CART');

export const getIngredient = createAction(GET_INGREDIENT, cart => cart);
export const getCartPillList = createAction(GET_CART, cart => cart);

const getIngredientSaga = createRequestSaga(GET_INGREDIENT, requestCartIngredient);
const getCartPillListSaga = createRequestSaga(GET_CART, requestCartPillList);

const initialState = {
  pillIngredient: [],
  cartPillList: [],
  pillIngredientError: null,
  cartPillListError: null,
};

export function* pillIngredientSaga() {
  yield takeLatest(GET_INGREDIENT, getIngredientSaga);
}

export function* cartPillListSaga() {
  yield takeLatest(GET_CART, getCartPillListSaga);
}

const pillIngredient = handleActions(
  {
    [GET_INGREDIENT_SUCCESS]: (state, { payload: pillIngredient }) => ({
      ...state,
      pillIngredient: pillIngredient,
    }),
    [GET_INGREDIENT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      pillIngredientError: error,
    }),

    [GET_CART_SUCCESS]: (state, { payload: cartPillList }) => ({
      ...state,
      cartPillList: cartPillList,
    }),
    [GET_CART_FAILURE]: (state, { payload: error }) => ({
      ...state,
      cartPillListError: error,
    }),
  },
  initialState,
);

export default pillIngredient;
