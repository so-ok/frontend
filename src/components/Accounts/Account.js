import React, { useState } from 'react';
import tw from 'tailwind-styled-components';
import ky from '../../assets/Images/ky.png';
import Login from './Login';
import Register from './Register';

const Container = tw.div`flex flex-col shadow-md items-center w-11/12 mx-auto rounded-xl gap-2 justify-center bg-white my-auto`;

const Header = tw.div`flex flex-col items-center gap-5 w-full shadow-md p-4 rounded-xl`;

const StyledImage = tw.img`h-40 w-40 my-auto rounded-lg shadow-md`;

const StyledTail = tw.div`flex flex-row w-full justify-evenly`;

const UserAuth = tw.div`flex justify-center items-center border-b-2 border-b-rose-400 w-30 mx-auto`;

const Account = () => {
  const [authMethod, setMethod] = useState('login');

  const handleOnClick = (e) => {
    setMethod(e.target.id);
  };

  return (
    <Container>
      <Header>
        <StyledImage src={ky} alt='so-ok logo'></StyledImage>
        <StyledTail>
          <UserAuth id='login' onClick={handleOnClick}>로그인</UserAuth>
          <UserAuth id='register' onClick={handleOnClick}>회원가입</UserAuth>
        </StyledTail>
      </Header>
      {authMethod === 'login' ? <Login /> : <Register />}
    </Container>);
};

export default Account;
