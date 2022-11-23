import React from 'react';
import tw from 'tailwind-styled-components';
//import Category from "../components/Category";
import Header from '../components/common/Header';
import Responsive from '../components/common/Responsive';
import SampleContainer from '../containers/sample/SampleContainer';

const Test = tw.h1`pl-10 pt-12 text-3xl font-bold underline`;

const MainPage = () => {
  return (
    <Responsive>
      <Header></Header>
      {
        // <Category></Category>
      }
      <Test>
        Hello world!
        <SampleContainer />
      </Test>
    </Responsive>
  );
};

export default MainPage;
