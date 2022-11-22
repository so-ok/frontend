import React from 'react';

import Header from '../components/common/Header';
import Responsive from '../components/common/Responsive';
import PillListContainer from '../containers/PillListContainer';
import CategoryContainer from '../containers/Category/CategoryContainer';

const MainPage = () => {
  return (<Responsive>
    <Header></Header>
    <CategoryContainer></CategoryContainer>
    <PillListContainer></PillListContainer>
  </Responsive>);
};

export default MainPage;
