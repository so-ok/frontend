import React, { useEffect } from 'react';
import tw from 'tailwind-styled-components';

const Container = tw.div`w-full h-full fixed top-0 right-0 bg-gray-600/25`;

const Dimmed = ({ children, ...rest }) => {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      document.body.style.cssText = '';
    };
  }, []);

  return <Container {...rest}>{children}</Container>;
};

export default Dimmed;
