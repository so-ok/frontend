import React from 'react';
import tw from 'tailwind-styled-components';

import test from '../assets/Images/list.png';
import PillCard from './common/PillCard';

const Container = tw.div`flex flex-col`;

const PillListContainer = tw.div`flex flex-col pt-4`;

const PillListComponent = ({ pillList }) => {
  return (
    <Container>
      <div className='flex flex-row justify-end mt-4 mr-5'>
        <img src={test} alt='list_type' className='w-7 h-7' />
      </div>
      <PillListContainer>
        {pillList['content']?.map(({ id, name, ingredients }) => (
          <PillCard key={id} name={name} ingredient={ingredients} />
        ))}
      </PillListContainer>
    </Container>
  );
};

export default PillListComponent;