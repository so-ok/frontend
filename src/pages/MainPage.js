import React from 'react';

import Header from '../components/common/Header';
import Responsive from '../components/common/Responsive';
import PillListContainer from '../containers/PillListContainer';
import CategoryContainer from '../containers/Category/CategoryContainer';
import ToggleButton from '../components/common/ToggleButton';
import ChatBot from '../components/common/ChatBot/ChatBot';

const MainPage = () => {
  return (
    <Responsive>
      <Header></Header>
      <CategoryContainer></CategoryContainer>
      <ToggleButton></ToggleButton>
      <PillListContainer></PillListContainer>
      <ChatBot></ChatBot>
    </Responsive>);
};

export default MainPage;
