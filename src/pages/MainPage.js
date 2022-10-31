import React from "react";
import Header from "../components/common/Header";
import Responsive from "../components/common/Responsive";
import SampleContainer from "../containers/sample/SampleContainer";

const MainPage = () => {
  return (
    <Responsive>
      <Header></Header>
      <h1 className='text-3xl font-bold underline'>
        Hello world!
        <SampleContainer />
      </h1>
    </Responsive>
  );
};

export default MainPage;
