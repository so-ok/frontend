import React from 'react';
import tw from 'tailwind-styled-components';

import PillListCard from './common/PillListCard';
import PillBlockCard from './common/PillBlockCard';
import { useSelector } from 'react-redux';

const Container = tw.div`flex flex-row flex-wrap w-11/12 mx-auto`;

const PillListComponent = ({ pillList }) => {
  const { listStyle } = useSelector(
    ({ listStyle }) => ({
      listStyle: listStyle.setStyle,
    }),
  );

  return (
    <Container>
      {pillList['content']?.map(({ id, name, ingredients }) => (
        listStyle === 'list' ? <PillListCard key={id} id={id} name={name} ingredient={ingredients} /> :
          <PillBlockCard key={id} id={id} name={name} ingredient={ingredients}></PillBlockCard>))}
    </Container>);
};

export default PillListComponent;
