import React from "react";
import Responsive from "../components/common/Responsive";
import SampleContainer from "../containers/SampleContainer";

const MainPage = () => {
  return <Responsive>
    <h1 className="text-3xl font-bold underline">
      Hello world!
      <SampleContainer/>
    </h1>
  </Responsive>
}

export default MainPage;
