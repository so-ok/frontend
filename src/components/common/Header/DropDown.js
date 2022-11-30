import React, { useState } from 'react';
import tw from 'tailwind-styled-components';
import { Arrow } from '../SvgImport';

const Nav = tw.div`relative inline-block`;

const Profile = tw.div`bg-white w-16 h-16 rounded-full shadow-md transition ease-in-out delay-50 active:bg-rose-400 hover:scale-100 duration-250 hover:bg-white hover:ring-1 hover:ring-rose-400 ring-inset`;

const DropDownContainer = tw.ul`absolute z-10 right-0 mt-2 list-none list-outside bg-slate-50 shadow-md rounded-md divide-y divide-dotted`;

const Menu = tw.li`flex justify-start items-center w-32 h-12 px-3 transition ease-in-out delay-50 duration-250 hover:bg-rose-400 rounded-md`;

const DropDown = () => {
  const [showDrop, setDrop] = useState(false);

  const handleDrop = () => {
    setDrop(!showDrop);
  };
  return (
    <Nav>
      <Profile onClick={handleDrop}></Profile>
      <Arrow props={'absolute bottom-0 right-1 items-center w-6 h-6'}></Arrow>
      {
        showDrop && <DropDownContainer>
          <Menu>프로필</Menu>
          <Menu>장바구니</Menu>
          <Menu>로그아웃</Menu>
        </DropDownContainer>
      }
    </Nav>
  );
};

export default DropDown;