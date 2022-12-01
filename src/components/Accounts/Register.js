import { useState } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';
import tw from 'tailwind-styled-components';

const Container = tw.div`flex flex-col w-11/12 bg-white p-6 justify-center items-center rounded-xl`;

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [pwdCheck, setPwdCheck] = useState('');

  return (
    <Container>
      <Input type='text' label='Name' value={name} name='이름' handleValue={e => setName(e.target.value)} />
      <Input type='text' label='Email' value={email} name='e-mail' handleValue={e => setEmail(e.target.value)} />
      <Input type='password' label='Password' value={pwd} name='비밀번호' handleValue={e => setPwd(e.target.value)} />
      <Input type='password' label='Password Check' name='비밀번호 확인' value={pwdCheck}
             handleValue={e => setPwdCheck(e.target.value)} />
      <Button to='/' className={'mt-1 bg-rose-400 text-white shadow-md mx-auto'}>회원가입</Button>
    </Container>);
};

export default Register;
