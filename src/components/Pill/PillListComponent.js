import React from 'react';
import tw from 'tailwind-styled-components';

import { useSelector } from 'react-redux';
import PillBlockCard from './PillBlockCard';
import PillListCard from './PillListCard';

const Container = tw.div`flex flex-row flex-wrap w-11/12 mx-auto`;

const PillListComponent = ({ pillList }) => {
  const { listStyle } = useSelector(({ listStyle }) => ({
    listStyle: listStyle.setStyle,
  }));

  return (
    <Container>
      {pillList['content']?.map(({ id, name, ingredients, image }) =>
        listStyle === 'list' ? (
          <PillListCard key={id} id={id} name={name} ingredient={ingredients} image={image} />
        ) : (
          <PillBlockCard key={id} id={id} name={name} ingredient={ingredients} image={image}></PillBlockCard>
        ),
      )}
    </Container>
  );
};

export default PillListComponent;
