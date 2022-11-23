import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Responsive from '../components/common/Responsive';
import tw from 'tailwind-styled-components';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import AuthHeader from '../components/auth/AuthHeader';
import kakaoicon from '../assets/Images/kakao_icon.png';
import googleicon from '../assets/Images/google_icon.png';
import { getAuthUrl } from '../lib/utils/Auth';
import { Link, useLocation } from 'react-router-dom';

const LoginPage = () => {
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const currentLocation = window.location;
  console.log(currentLocation);

  const handleEmail = (e) => {
    if (e.target.value == null) {
      alert('E-mail 주소를 입력하세요.');
    }
    setEmail(e.target.value);
    console.log(email);
  };

  const handlePwd = (e) => {
    if (e.target.value == null) {
      alert('Password를 입력하세요.');
    }
    setPwd(e.target.value);
  };

  const onClickLogin = () => {};

  return (
    <Responsive>
      <AuthHeader></AuthHeader>
      <Input
        type="text"
        label="Email"
        value={email}
        handleValue={handleEmail}
      />
      <Input
        type="password"
        label="Password"
        value={pwd}
        handleValue={handlePwd}
      />

      <Button type="submit" to="/">
        로그인
      </Button>
      <div className=" grid grid-cols-10 gap-3 place-items-center mt-5">
        <button
          className="col-start-5 align-middle"
          onClick={() => {
            window.location = getAuthUrl('kakao');
          }}
        >
          <img
            src={kakaoicon}
            className="w-9 h-9 bg-[#FEE500] rounded-full mr-2"
            alt="kakao_icon"
          ></img>
        </button>
        <button
          className="col-start-6  align-middle"
          onClick={() => {
            window.location = getAuthUrl('google');
          }}
        >
          <img
            src={googleicon}
            alt="google_icon"
            className="rounded-full w-9 h-9 bg-white p-2"
          ></img>
        </button>
        <h2 className=" col-span-10  mt-1.5 mr-2 text-slate-500">
          SNS 계정으로 로그인하기
        </h2>
      </div>
    </Responsive>
  );
};

export default LoginPage;
