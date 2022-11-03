import React from "react";

import tw from "tailwind-styled-components";
import hamberger from "../../assets/Images/hamberger.png";
import search from "../../assets/Images/search.png";

const HeaderContainer = tw.div`h-32 flex flex-col justify-around`;

const HambergerContainer = tw.div`flex inset-y-0 pl-5`;

const Hamberger = tw.img`h-7 w-7 cursor-pointer hover:bg-zinc-200`;

const SearchContainer = tw.div`relative text-gray-600`;

const SearchIconContainer = tw.div`flex absolute inset-y-0 items-center pl-9 pointer-events-none`;

const SearchIcon = tw.img`w-5 h-5`;

const SearchBarContainer = tw.div`flex justify-center`;

const SearchBar = tw.input`p-3 pl-12 w-11/12 text-md text-gray-700 bg-gray-200 rounded-2xl  focus:outline-blue-500`;

const Header = () => {
  return (
    <HeaderContainer>
      <HambergerContainer>
        <Hamberger src={hamberger} alt='햄버거'></Hamberger>
      </HambergerContainer>
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
