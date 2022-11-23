import React from 'react';

const Options = (props) => {
  const getProvider = (name) => props?.actionProvider[name];
  return (
    <div>
      <button onClick={getProvider('handleAttention')}>네</button>
      <button onClick={getProvider('handleBye')}>아니오</button>
    </div>
  );
};

export default Options;
