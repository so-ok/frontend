import React from 'react';
import tw from 'tailwind-styled-components';
import ky from '../../assets/Images/ky.png';
import back from '../../assets/Images/back_arrow.png';

import { Link, useNavigate } from 'react-router-dom';

export const StyledWrapper = tw.div`
flex 
flex-col 
shadow-md 
items-center 
rounded-b-xl
h-64
justify-center
mb-12
bg-white
`;
const StyledPageHeader = tw.div`
grid
grid-cols-8
gap4
place-items-start
`;
const StyledImage = tw.img`
h-36
rounded-lg
`;

const StyledTail = tw.div`
grid 
grid-cols-2  
gap-4 
w-full 
mt-12
`;

const AuthHeader = ({ children }) => {
  const navigate = useNavigate();

  return (
    <StyledWrapper>
      <StyledPageHeader>
        <button className="grid grid-cols-4 mt-1 " onClick={() => navigate(-1)}>
          <img
            src={back}
            alt="back_arrow"
            className="w-5 h-5 col-start-2"
          ></img>
        </button>
      </StyledPageHeader>

      <StyledImage
        src={ky}
        alt="so-ok lo
      go"
      ></StyledImage>
      <StyledTail>
        <button className="sm:text-sm">
          <Link to="/login">로그인</Link>
        </button>

        <button className="sm:text-sm">
          <Link to="/register">회원가입</Link>
        </button>
      </StyledTail>
      <p className="font-semibold pt-3"></p>
    </StyledWrapper>
  );
};

export default AuthHeader;
