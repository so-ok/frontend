import React from 'react';


const Responsive = ({children, ...rest}) => {
  return <div className="container mx-auto max-w-screen-sm" {...rest}>{children}</div>;
};

export default Responsive;
