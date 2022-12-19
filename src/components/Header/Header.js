import React from 'react';
import tw from 'tailwind-styled-components';
import SearchBar from '../common/SearchBar';
import TitleBar from './TitleBar';

const HeaderContainer = tw.div`h-32 flex flex-col justify-around`;

const Header = () => {
  return (
    <HeaderContainer>
      <TitleBar></TitleBar>
      <SearchBar></SearchBar>
    </HeaderContainer>
  );
};

export default Header;
