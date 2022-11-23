import React, { useState } from 'react';
import tw from 'tailwind-styled-components';

import { Block, List } from './SvgImport';

const ToggleContainer = tw.div`flex flex-row gap-2 mx-auto mt-6 py-2 px-2 rounded-md bg-slate-50 shadow-md`;

const Selected = tw.label`transition ease-in duration-300 rounded-md p-1`;

export const ToggleButton = () => {
  const [select, setSelect] = useState({ selectedOption: 'list' });

  const handleOnChange = (e) => {
    setSelect({
      selectedOption: e.target.id,
    });
  };

  return (
    <ToggleContainer>
      <input id='list' className='peer/list sr-only' type='radio' onChange={handleOnChange}
             checked={select.selectedOption === 'list'} />
      <Selected htmlFor='list'
                className='peer-checked/list:bg-rose-400 peer-checked/list:shadow-md'>
        <List props='w-6 h-6 transition ease-in duration-300'
              color={select.selectedOption === 'list' ? '#e2e8f0' : '#475569'}></List>
      </Selected>
      <input id='block' className='peer/block sr-only' type='radio' onChange={handleOnChange}
             checked={select.selectedOption === 'block'} />
      <Selected htmlFor='block'
                className='peer-checked/block:bg-rose-400 peer-checked/block:shadow-md'>
        <Block props='w-6 h-6 transition ease-in duration-300'
               color={select.selectedOption === 'block' ? '#e2e8f0' : '#475569'}></Block>
      </Selected>
    </ToggleContainer>
  );
};

export default ToggleButton;