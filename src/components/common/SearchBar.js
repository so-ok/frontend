import React from 'react';
import search from '../../assets/Images/search.png';
import tw from 'tailwind-styled-components';

const SearchContainer = tw.div`relative text-gray-600`;

const SearchIconContainer = tw.div`flex absolute inset-y-0 items-center pl-9 pointer-events-none`;

const SearchIcon = tw.img`w-5 h-5`;

const SearchBarContainer = tw.div`flex justify-center`;

const SearchBarInput = tw.input`p-3 pl-12 w-11/12 text-md bg-white rounded-2xl focus:outline-rose-400 shadow-md`;

const SearchBar = () => {
  return (
    <SearchContainer>
      <SearchIconContainer>
        <SearchIcon src={search} alt="검색"></SearchIcon>
      </SearchIconContainer>
      <SearchBarContainer>
        <SearchBarInput type="search" name="search"></SearchBarInput>
      </SearchBarContainer>
    </SearchContainer>
  );
};

export default SearchBar;
