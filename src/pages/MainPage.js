import React from "react";
import Category from "../components/Category";
import Header from "../components/common/Header";
import Responsive from "../components/common/Responsive";
import SampleContainer from "../containers/sample/SampleContainer";

const MainPage = () => {
  return (
    <Responsive>
      <Header></Header>
      <Category></Category>
      <h1 className='pl-10 pt-12 text-3xl font-bold underline'>
        Hello world!
        <SampleContainer />
      </h1>
    </Responsive>
  );
};

export default MainPage;
