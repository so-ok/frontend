import { createAction, handleActions } from 'redux-actions';

const ADD_CART = 'cart/ADD_CART';
const DELETE_CART = 'cart/DELETE_CART';

export const addCART = createAction(ADD_CART, payload => payload);
export const deleteCART = createAction(DELETE_CART, payload => payload);

const localStorageKey = 'cart';

const getLocalStorageCart = () => {
  const item = localStorage.getItem(localStorageKey);
  if (item) {
    return JSON.parse(item);
  }
  return [];
};

const addToLocalStorageCart = (previous, id) => {
  const joined = [...previous, id];
  localStorage.setItem(localStorageKey, JSON.stringify(joined));
  return joined;
};

const deleteFromLocalStorageCart = (previous, id) => {
  const removed = previous.filter(foundId => foundId !== id);
  localStorage.setItem(localStorageKey, JSON.stringify(removed));
  return removed;
};

const initialState = {
  cart: getLocalStorageCart(),
  isInCart: false,
};

const cart = handleActions(
  {
    [ADD_CART]: (state, { payload: id }) => ({
      cart: addToLocalStorageCart(state.cart, id)
    }),

    [DELETE_CART]: (state, { payload: id }) => ({
      cart: deleteFromLocalStorageCart(state.cart, id),
    }),
  },
  initialState,
);

export default cart;
