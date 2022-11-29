import React from 'react';
import tw from 'tailwind-styled-components';
import { Arrow } from './SvgImport';

const Container = tw.div`flex flex-row w-11/12 mx-auto justify-between items-center mt-1`;

const Title = tw.div`text-slate-100 font-black text-3xl bg-rose-400 rounded-3xl py-1 px-3 shadow-md`;

const Nav = tw.div`relative`;

const Profile = tw.div`bg-white w-16 h-16 rounded-full shadow-md`;

const NavBar = () => {
  return (
    <Container>
      <Title>So-ok</Title>
      <Nav>
        <Profile></Profile>
        <Arrow props={'absolute bottom-0 right-0 items-center w-6 h-6'}></Arrow>
      </Nav>
    </Container>
  );
};

export default NavBar;
