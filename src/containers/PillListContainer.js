import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addListAction } from '../modules/pillList';
import tw from 'tailwind-styled-components';

import Loading from '../components/common/Loading';
import PillCard from '../components/common/PillCard';

const Container = tw.div`flex flex-col pt-4 justify-items-center`;

const PillList = () => {
  const dispatch = useDispatch();
  const { pillList, pillListError, loading } = useSelector(
    ({ pillList, loading }) => ({
      pillList: pillList.list,
      pillListError: pillList.pillListError,
      loading: loading['pillList/GET_LIST'],
    }),
  );

  useEffect(() => {
    dispatch(addListAction());
  }, [dispatch]);

  useEffect(() => {
    if (pillListError) {
      console.error(pillListError);
    }
  }, [pillListError, pillList, loading]);

  return !loading ? (
    <Container>
      {pillList.map(({ id, name, ingredient, imge }) => (
        <PillCard id={id} name={name} ingredient={ingredient} imge={imge} />
      ))}
    </Container>
  ) : (
    <Loading></Loading>
  );
};

export default PillList;
