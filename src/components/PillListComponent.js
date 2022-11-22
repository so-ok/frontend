import React from 'react';
import tw from 'tailwind-styled-components';
import PillCard from './common/PillCard';
import ToggleButton from './common/ToggleButton';

const Container = tw.div`flex flex-col`;

const PillListContainer = tw.div`flex flex-col pt-4`;

const PillListComponent = ({ pillList }) => {
  return (
    <Container>
      <ToggleButton></ToggleButton>
      <PillListContainer>
        {pillList['content']?.map(({ id, name, ingredients }) => (
          <PillCard key={id} name={name} ingredient={ingredients} />))}
      </PillListContainer>
    </Container>);
};

export default PillListComponent;
