import React from 'react';
import tw from 'tailwind-styled-components';

import test from '../assets/Images/list.png';

const Container = tw.div`flex flex-col`;

const PillListContainer = tw.div`flex flex-col pt-4`;

const PillListComponent = ({ pillList }) => {
  console.log(pillList);
  return (
    <Container>
      <div className='flex flex-row justify-end mt-4 mr-5'>
        <img src={test} alt='list_type' className='w-7 h-7' />
      </div>
      <PillListContainer>
        {/*{pillList['content'].map(({ id, name, ingredient }) => (*/}
        {/*  <PillCard key={id} name={name} ingredient={ingredient} />*/}
        {/*))}*/}
      </PillListContainer>
    </Container>
  );
};

export default PillListComponent;
