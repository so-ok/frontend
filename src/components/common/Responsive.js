import React from "react";
import tw from "tailwind-styled-components";

const Container = tw.div`container mx-auto max-w-screen-sm h-screen`;

const Responsive = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default Responsive;
