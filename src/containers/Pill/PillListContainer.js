import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/common/Loading';
import PillListComponent from '../../components/Pill/PillListComponent';
import { addListAction } from '../../modules/pills';

const PillListContainer = () => {
  const dispatch = useDispatch();
  const { pillList, pillListError, loading, category } = useSelector(({ pillList, loading, category }) => ({
    pillList: pillList.list,
    pillListError: pillList.pillListError,
    loading: loading['pills/GET_LIST'],
    category: category.category,
  }));

  useEffect(() => {
    dispatch(addListAction({ attentions: [category] }));
  }, [dispatch, category]);

  useEffect(() => {
    if (pillListError) {
      console.error(pillListError);
    }
  }, [pillListError]);

  return !loading ? <PillListComponent pillList={pillList}></PillListComponent> : <Loading></Loading>;
};

export default PillListContainer;
