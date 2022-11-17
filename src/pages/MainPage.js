import React from 'react';

import Header from '../components/common/Header';
import Responsive from '../components/common/Responsive';
import PillListContainer from '../containers/PillListContainer';
import SampleContainer from '../containers/sample/SampleContainer';
import CategoryContainer from '../containers/Category/CategoryContainer';

const MainPage = () => {
  return (<Responsive>
    <Header></Header>
    <CategoryContainer></CategoryContainer>
    <PillListContainer></PillListContainer>
    <h1 className='pl-10 pt-12 text-3xl font-bold underline'>
      Hello world!
      <SampleContainer />
    </h1>
  </Responsive>);
};

export default MainPage;
