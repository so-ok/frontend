import React from 'react';
import tw from 'tailwind-styled-components';

const StyledDiv = tw.div`container mx-auto max-w-screen-sm`;

const Responsive = ({ children, ...rest }) => {
  return <StyledDiv {...rest}>{children}</StyledDiv>;
};

export default Responsive;
