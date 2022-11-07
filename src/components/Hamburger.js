import React from 'react';
import tw from 'tailwind-styled-components';

import hamburger from '../assets/Images/hamburger.png';

const Container = tw.div`p-1 hover:bg-slate-200 rounded-xl`;

const HambergerButton = tw.img`h-9 w-9 cursor-pointer`;

const Hamberger = () => {
  return (
    <Container>
      <HambergerButton src={hamburger} alt="햄버거"></HambergerButton>
    </Container>
  );
};
export default Hamberger;
