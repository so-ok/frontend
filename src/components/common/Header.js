import React from 'react';
import tw from 'tailwind-styled-components';
import SearchBar from './SearchBar';
import NavBar from './NavBar';

const HeaderContainer = tw.div`h-32 flex flex-col justify-around`;

const Header = () => {
  return (
    <HeaderContainer>
      <NavBar></NavBar>
      <SearchBar></SearchBar>
    </HeaderContainer>
  );
};

export default Header;
