import React from 'react';
import tw from 'tailwind-styled-components';

import hamburger from '../assets/Images/hamburger.png';

const Container = tw.div`p-1 hover:bg-slate-200 rounded-xl`;

const HamburgerButton = tw.img`h-8 w-8 cursor-pointer`;

const Hamburger = () => {
  return (
    <Container>
      <HamburgerButton src={hamburger} alt='햄버거'></HamburgerButton>
    </Container>
  );
};
export default Hamburger;
