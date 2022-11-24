import React from 'react';
import tw from 'tailwind-styled-components';
import Button from '../../../common/Button';

const Container = tw.div`flex justify-end flex-row gap-4`;

const Options = (props) => {
  const getProvider = (name) => props?.actionProvider[name];
  const style = 'text-slate-600 bg-slate-200 font-bold shadow-md';
  return (
    <Container>
      <Button onClick={getProvider('handleAttention')} className={style}>네</Button>
      <Button onClick={getProvider('handleBye')} className={style}>아니오</Button>
    </Container>
  );
};

export default Options;
