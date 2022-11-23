import React, { useState } from 'react';
import Responsive from '../components/common/Responsive';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import AuthHeader from '../components/auth/AuthHeader';
import back from '../assets/Images/back_arrow.png';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [pwdCheck, setPwdCheck] = useState('');

  const navigate = useNavigate();

  const handleName = (e) => {
    setName(e.target.value);
  };

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

  const handlePwdCheck = (e) => {
    setPwdCheck(e.target.value);
  };

  return (<Responsive>
    <AuthHeader>
      <button
        className='grid grid-cols-6 gap-4 place-items-start'
        onClick={() => navigate(-1)}
      >
        <img src={back} alt='back_arrow' className='w-5 h-5'></img>
      </button>
    </AuthHeader>
    <Input type='text' label='Name' value={name} handleValue={handleEmail} />
    <Input
      type='text'
      label='Email'
      value={email}
      handleValue={handleEmail}
    />
    <Input type='text' label='Password' value={pwd} handleValue={handlePwd} />
    <Input
      type='password'
      label='Password Check'
      value={pwdCheck}
      handleValue={handlePwdCheck}
    />
    <Button to='/'>회원가입</Button>
  </Responsive>);
};

export default RegisterPage;
