import React from 'react';
import tw from 'tailwind-styled-components';
import DropDown from './DropDown';

const Container = tw.div`flex flex-row w-11/12 mx-auto justify-between items-center mt-1`;

const Title = tw.div`text-slate-100 font-black text-3xl bg-rose-400 rounded-3xl py-1 px-3 shadow-md`;

const TitleBar = () => {
  return (
    <Container>
      <Title>So-ok</Title>
      <DropDown></DropDown>
    </Container>
  );
};

export default TitleBar;
