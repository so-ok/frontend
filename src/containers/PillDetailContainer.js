import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PillDetailPage from '../pages/PillDetailPage';
import Loading from '../components/common/Loading';
import { getPillDetail } from '../modules/pillDetail';


const PillDetailContainer = () => {
  const dispatch = useDispatch();
  const { pillDetail, pillListError, loading } = useSelector(
    ({ pillDetail, pillListError, loading }) => ({
      loading: loading['pills/GET_PILL'],
      pillDetail: pillDetail.pillDetail,
      pillListError: pillDetail.pillListError,
    }),
  );
  const params = useParams();

  useEffect(() => {
    dispatch(getPillDetail(params.id));
  }, []);

  useEffect(() => {
    if (pillListError) {
      console.error(pillListError);
    }
  }, [pillListError]);

  return (
    !loading ? (
      <PillDetailPage pillDetail={pillDetail}></PillDetailPage>
    ) : (
      <Loading></Loading>
    )
  );
};

export default PillDetailContainer;