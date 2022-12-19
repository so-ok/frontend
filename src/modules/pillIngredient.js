import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import { requestCartIngredient } from '../lib/api/articles';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';

const [GET_INGREDIENT, GET_INGREDIENT_SUCCESS, GET_INGREDIENT_FAILURE] =
  createRequestActionTypes('pills/GET_INGREDIENT');

export const getIngredient = createAction(GET_INGREDIENT, cart => cart);

const getIngredientSaga = createRequestSaga(GET_INGREDIENT, requestCartIngredient);

const initialState = {
  pillIngredient: [],
  pillIngredientError: null,
};

export function* pillIngredientSaga() {
  yield takeLatest(GET_INGREDIENT, getIngredientSaga);
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
  },
  initialState,
);

export default pillIngredient;
