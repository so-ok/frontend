import React from 'react';

import Header from '../components/common/Header';
import Responsive from '../components/common/Responsive';
import PillListContainer from '../containers/Pill/PillListContainer';
import Category from '../components/Category/Category';
import ChatBot from '../components/common/ChatBot/ChatBot';
import ToggleButtonContainer from '../containers/ToggleButtonContainer';

const MainPage = () => {
  return (
    <Responsive>
      <Header></Header>
      <Category></Category>
      <ToggleButtonContainer></ToggleButtonContainer>
      <PillListContainer></PillListContainer>
      <ChatBot></ChatBot>
    </Responsive>);
};

export default MainPage;
