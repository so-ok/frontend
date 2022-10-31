import React from "react";

const Responsive = ({ children, ...rest }) => {
  return (
    <div className='container mx-auto max-w-screen-sm h-screen' {...rest}>
      {children}
    </div>
  );
};

export default Responsive;
