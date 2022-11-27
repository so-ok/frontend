import React from 'react';
import tw from 'tailwind-styled-components';
import Button from '../../../common/Button';

const Container = tw.div`flex justify-center flex-row gap-4`;

const Options = (props) => {
  const getProvider = (name) => props?.actionProvider[name];
  const style = 'text-slate-600 bg-slate-50 rounded-xl font-bold shadow-md transition ease-in-out delay-50 active:bg-rose-400 hover:-translate-y-1 hover:scale-110 duration-250 hover:bg-white hover:ring-1 hover:ring-rose-400 ring-inset';
  return (<Container>
      <Button onClick={getProvider('handleAttention')} className={style}>네</Button>
      <Button onClick={getProvider('handleBye')} className={style}>아니오</Button>
    </Container>);
};

export default Options;
