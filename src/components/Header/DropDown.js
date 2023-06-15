<<<<<<< Updated upstream
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
=======
import React, { useEffect, useState } from 'react';
>>>>>>> Stashed changes
import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import { clearToken } from '../../modules/auth';
import { clearCart } from '../../modules/cart';
import { Arrow } from '../common/SvgImport';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../modules/user';

const Nav = tw.div`relative inline-block`;

const Profile = tw.img`bg-white w-16 h-16 rounded-full shadow-md transition ease-in-out delay-50 active:bg-rose-400 hover:scale-100 duration-250 hover:bg-white hover:ring-1 hover:ring-rose-400 ring-inset`;

const DropDownContainer = tw.div`absolute z-10 right-0 mt-2 list-none list-outside bg-slate-50 shadow-md rounded-md divide-y divide-dotted`;

const Menu = tw(Link)`flex justify-start font-bold items-center w-32 h-12 px-3 transition ease-in-out delay-50 duration-250 hover:bg-rose-400 rounded-md hover:text-white`;

const DropDown = () => {
  const dispatch = useDispatch();
  const [showDrop, setDrop] = useState(false);
  const dispatch = useDispatch();

  const { userInfo, loading } = useSelector(
    ({ user, loading }) => ({
      userInfo: user.user,
      loading: loading['user/GET_USER'],
    }),
  );

  useEffect(() => {
    dispatch(getUser());
  }, []);


  const handleDrop = () => {
    setDrop(!showDrop);
  };

  const logout = () => {
    dispatch(clearCart());
    dispatch(clearToken());
  }

  return (
    <Nav>
      <Profile onClick={handleDrop} onBlur={handleDrop} src={userInfo?.image}/>
      <Arrow props={'absolute bottom-0 right-1 items-center w-6 h-6'}></Arrow>
      {showDrop && (
        <DropDownContainer>
          <Menu to='/profile'>프로필</Menu>
          <Menu to='/cart'>장바구니</Menu>
          <Menu onClick={logout} to='/account'>로그아웃</Menu>
        </DropDownContainer>
      )}
    </Nav>
  );
};

export default DropDown;
