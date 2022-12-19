import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from '../components/Cart/Cart';
import Loading from '../components/common/Loading';
import { getCartPillList, getIngredient } from '../modules/pillIngredient';

const CartPageContainer = () => {
  const dispatch = useDispatch();
  const { cart, pillIngredient, pillIngredientError, cartPillList, loading } = useSelector(
    ({ cart, pillIngredient, loading }) => ({
      loading: loading['pills/GET_INGREDIENT'],
      cart: cart.cart,
      pillIngredient: pillIngredient.pillIngredient,
      cartPillList: pillIngredient.cartPillList,
      pillIngredientError: pillIngredient.pillIngredientError,
    }),
  );

  useEffect(() => {
    if (pillIngredientError) {
      console.error(pillIngredientError);
    } else {
      dispatch(getCartPillList(cart));
      dispatch(getIngredient(cart));
    }
  }, [dispatch, pillIngredientError]);

  return !loading ? <Cart pillIngredient={pillIngredient} cartPillList={cartPillList} /> : <Loading />;
};

export default CartPageContainer;
