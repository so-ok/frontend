import React from 'react';
import tw from 'tailwind-styled-components';
import { Link } from 'react-router-dom';

const StyledDiv = tw.div`
relative
my-2
`;

const StyledButton = tw.button`
mt-1
px-3
py-2
bg-rose-400
text-white 
text-center
border 
shadow-sm
border-slate-300
placeholder-slate-400
focus:outline-none
focus:border-sky-500
focus:ring-sky-500
block w-full
rounded-md 
sm:text-sm 
focus:ring-1
`;

const StyledLink = tw(Link)`
mt-1
px-3
py-2
bg-rose-400
text-white 
text-center
border 
shadow-sm
border-slate-300
placeholder-slate-400
focus:outline-none
focus:border-sky-500
focus:ring-sky-500
block w-full
rounded-md 
sm:text-sm 
focus:ring-1
`;
const Button = ({ onClick, to, children }) => {
  return (
    <StyledDiv>
      {to ? (
        <StyledLink to={to}>{children}</StyledLink>
      ) : (
        <StyledButton onClick={onClick}>{children}</StyledButton>
      )}
    </StyledDiv>
  );
};

export default Button;
