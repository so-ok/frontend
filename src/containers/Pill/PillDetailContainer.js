import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loading from '../../components/common/Loading';
import PillDetail from '../../components/Pill/PillDetail';
import { getPillDetail } from '../../modules/pillDetail';

const PillDetailContainer = () => {
  const dispatch = useDispatch();
  const { pillDetail, pillIngredient, pillListError, loading } = useSelector(
    ({ pillDetail, pillDetailError, loading, pillIngredient }) => ({
      loading: loading['pills/GET_PILL'],
      pillDetail: pillDetail.pillDetail,
      pillDetailError: pillDetailError,
      pillIngredient: pillIngredient.pillIngredient,
    }),
  );

  const params = useParams();

  useEffect(() => {
    if (pillListError) {
      console.error(pillListError);
    } else {
      dispatch(getPillDetail(params.id));
    }
  }, [dispatch, params.id, pillListError]);

  return !loading ? <PillDetail pillDetail={pillDetail}></PillDetail> : <Loading></Loading>;
};

export default PillDetailContainer;
