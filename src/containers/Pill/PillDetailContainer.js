import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPillDetail } from '../../modules/pillDetail';
import Loading from '../../components/common/Loading';
import PillDetail from '../../components/Pill/PillDetail';


const PillDetailContainer = () => {
  const dispatch = useDispatch();
  const { pillDetail, pillListError, loading } = useSelector(
    ({ pillDetail, pillListError, loading }) => ({
      loading: loading['pills/GET_PILL'],
      pillDetail: pillDetail.pillDetail,
      pillListError: pillDetail.pillListError,
    }));

  const params = useParams();

  useEffect(() => {
    if (pillListError) {
      console.error(pillListError);
    } else {
      dispatch(getPillDetail(params.id));
    }
  }, [dispatch, params.id, pillListError]);

  return (
    !loading ? (
      <PillDetail pillDetail={pillDetail}></PillDetail>
    ) : (
      <Loading></Loading>
    )
  );
};

export default PillDetailContainer;