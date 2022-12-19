import { createAction, handleActions } from 'redux-actions';

const ADD_CART = 'cart/ADD_CART';
const DELETE_CART = 'cart/DELETE_CART';

export const addCART = createAction(ADD_CART, payload => payload);
export const deleteCART = createAction(DELETE_CART, payload => payload);

const getLocalStorageCart = () => {
  const item = localStorage.getItem('cart');
  if (item) {
    return JSON.parse(item);
  }
  return [];
};

const initialState = {
  cart: getLocalStorageCart(),
  isInCart: false,
};

const cart = handleActions(
  {
    [ADD_CART]: (state, { payload: id }) => {
      const addedCart = [...state.cart, id];
      localStorage.setItem('cart', JSON.stringify(addedCart));
      return {
        cart: addedCart,
      };
    },

    [DELETE_CART]: (state, { payload: id }) => {
      const deleteCart = [...state.cart.filter(pre => pre !== id)];
      localStorage.setItem('cart', JSON.stringify(deleteCart));
      return {
        cart: deleteCart,
      };
    },
  },
  initialState,
);

export default cart;
