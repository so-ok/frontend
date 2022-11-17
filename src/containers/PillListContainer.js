import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addListAction } from '../modules/pills';

import Loading from '../components/common/Loading';
import PillListComponent from '../components/PillListComponent';

const PillListContainer = () => {
  const dispatch = useDispatch();
  const { pillList, pillListError, loading, category } = useSelector(
    ({ pillList, loading, category }) => ({
      pillList: pillList.list,
      pillListError: pillList.pillListError,
      loading: loading['pills/GET_LIST'],
      category: category.category,
    }),
  );

  useEffect(() => {
    dispatch(addListAction(category));
  }, [dispatch, category]);

  useEffect(() => {
    if (pillListError) {
      console.error(pillListError);
    }
  }, [pillListError]);

  return !loading ? (
    <PillListComponent pillList={pillList}></PillListComponent>
  ) : (
    <Loading></Loading>
  );
};

export default PillListContainer;
