import React from 'react';

import Hamburger from '../Hamburger';
import tw from 'tailwind-styled-components';
import search from '../../assets/Images/search.png';

const HeaderContainer = tw.div`h-32 flex flex-col justify-around`;

const HamburgerContainer = tw.div`flex inset-y-0 pl-5`;

const SearchContainer = tw.div`relative text-gray-600`;

const SearchIconContainer = tw.div`flex absolute inset-y-0 items-center pl-9 pointer-events-none`;

const SearchIcon = tw.img`w-5 h-5`;

const SearchBarContainer = tw.div`flex justify-center`;

const SearchBar = tw.input`p-3 pl-12 w-11/12 text-md bg-white rounded-2xl focus:outline-rose-400`;

const Header = () => {
  return (
    <HeaderContainer>
      <HamburgerContainer>
        <Hamburger></Hamburger>
      </HamburgerContainer>
      <SearchContainer>
        <SearchIconContainer>
          <SearchIcon src={search} alt='검색'></SearchIcon>
        </SearchIconContainer>
        <SearchBarContainer>
          <SearchBar type='search' name='search'></SearchBar>
        </SearchBarContainer>
      </SearchContainer>
    </HeaderContainer>
  );
};

export default Header;
