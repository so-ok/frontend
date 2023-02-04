import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import { getAuthUrl } from '../../lib/utils/Auth';
import Button from '../common/Button';
import Input from '../common/Input';

import googleIcon from '../../assets/Images/google_icon.png';
import kakaoIcon from '../../assets/Images/kakao_icon.png';
import { useDispatch } from 'react-redux';
import { doLogin } from '../../modules/auth';

const Container = tw.div`flex flex-col w-11/12 bg-white p-6 justify-center items-center rounded-xl`;

const LoginContainer = tw.div`flex flex-col gap-3 w-full`;

const Image = tw.img`rounded-full w-10 h-10 bg-white p-2 shadow-md`;

const OAuthContainer = tw.div`flex flex-col gap-4 justify-center items-center mt-5`;

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const onLoginSuccess = () => navigate('/');
  const login = () => dispatch(doLogin({ username: email, password: pwd, onSuccess: onLoginSuccess }));

  return (
    <Container>
      <LoginContainer>
        <Input type="text" label="Email" value={email} handleValue={e => setEmail(e.target.value)} />
        <Input type="password" label="Password" value={pwd} handleValue={e => setPwd(e.target.value)} />
        <Button onClick={login} className={'mt-2 bg-rose-400 text-white shadow-md mx-auto'}>
          로그인
        </Button>
      </LoginContainer>

      <OAuthContainer>
        <h2 className="mt-1.5 mr-2 text-slate-600">SNS 계정으로 로그인하기</h2>
        <div className="flex flex-row gap-6">
          <Image
            onClick={() => {
              window.location = getAuthUrl('kakao');
            }}
            src={kakaoIcon}
            className="bg-[#FEE500] p-0"
            alt="kakao_icon"
          ></Image>

          <Image
            onClick={() => {
              window.location = getAuthUrl('google');
            }}
            src={googleIcon}
            alt="google_icon"
          ></Image>
        </div>
      </OAuthContainer>
    </Container>
  );
};

export default Login;
