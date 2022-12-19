import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from '../components/Cart/Cart';
import Loading from '../components/common/Loading';
import { getIngredient } from '../modules/pillIngredient';

const CartPageContainer = () => {
  const dispatch = useDispatch();
  const { cart, pillIngredient, pillIngredientError, loading } = useSelector(({ cart, pillIngredient, loading }) => ({
    loading: loading['pills/GET_INGREDIENT'],
    cart: cart.cart,
    pillIngredient: pillIngredient.pillIngredient,
    pillIngredientError: pillIngredient.pillIngredientError,
  }));

  useEffect(() => {
    if (pillIngredientError) {
      console.error(pillIngredientError);
    } else {
      dispatch(getIngredient(cart));
    }
  }, [dispatch, pillIngredientError]);

  return !loading ? <Cart pillIngredient={pillIngredient} /> : <Loading />;
};

export default CartPageContainer;
