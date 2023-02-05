import { createAction, handleActions } from 'redux-actions';

const ADD_CART = 'cart/ADD_CART';
const DELETE_CART = 'cart/DELETE_CART';
const CLEAR_CART = 'cart/CLEAR_CART';

export const addCART = createAction(ADD_CART, payload => payload);
export const deleteCART = createAction(DELETE_CART, payload => payload);
export const clearCart = createAction(CLEAR_CART);

const add = (previous, id) => {
  if (previous.includes(id)) {
    return previous;
  }
  return [...previous, id];
};
const remove = (previous, id) => previous.filter(foundId => foundId !== id);

const initialState = {
  cart: [],
  isInCart: false,
};

const cart = handleActions(
  {
    [ADD_CART]: (state, { payload: id }) => ({
      cart: add(state.cart, id)
    }),
    [DELETE_CART]: (state, { payload: id }) => ({
      cart: remove(state.cart, id)
    }),
    [CLEAR_CART]: () => initialState,
  },
  initialState,
);

export default cart;
