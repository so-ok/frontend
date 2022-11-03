import React, { Suspense } from "react";

import Category from "../components/Category";
import Header from "../components/common/Header";
import Loading from "../components/common/Loading";
import Responsive from "../components/common/Responsive";
import SampleListComponent from "../components/sample/SampleListContainer";
import FetchList from "../containers/PillList/PillListContainer";
import SampleContainer from "../containers/sample/SampleContainer";

const MainPage = () => {
  return (
    <Responsive>
      <Header></Header>
      <Category></Category>
      <Loading></Loading>

      <Suspense fallback={<Loading />}>
        <FetchList></FetchList>
        <h1 className='pl-10 pt-12 text-3xl font-bold underline'>
          Hello world!
          <SampleContainer />
        </h1>
      </Suspense>
    </Responsive>
  );
};

export default MainPage;
