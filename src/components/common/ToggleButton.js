import React, { useState } from 'react';
import tw from 'tailwind-styled-components';

import { Block, List } from './SvgImport';
import { useDispatch } from 'react-redux';
import { setListStyle } from '../../modules/listStyle';

const Container = tw.div`w-11/12 mx-auto flex justify-start`;

const ToggleContainer = tw.div`flex flex-row inline-flex gap-2 mt-6 py-2 px-2 rounded-md bg-slate-50 shadow-md`;

const Selected = tw.label`transition ease-in duration-300 rounded-md p-1`;

export const ToggleButton = () => {
  const dispatch = useDispatch();
  const [select, setSelect] = useState({ listStyle: 'list' });

  const handleOnChange = (event) => {
    event.stopPropagation();
    setSelect({
      listStyle: event.target.id,
    });
    dispatch(setListStyle(event.target.id));
  };

  return (
    <Container>
      <ToggleContainer>
        <input id='list' className='peer/list sr-only' type='radio' onChange={handleOnChange}
               checked={select.listStyle === 'list'} />
        <Selected htmlFor='list'
                  className='peer-checked/list:bg-rose-400 peer-checked/list:shadow-md'>
          <List props='w-6 h-6 transition ease-in duration-300'
                color={select.listStyle === 'list' ? '#e2e8f0' : '#475569'}></List>
        </Selected>
        <input id='block' className='peer/block sr-only' type='radio' onChange={handleOnChange}
               checked={select.listStyle === 'block'} />
        <Selected htmlFor='block'
                  className='peer-checked/block:bg-rose-400 peer-checked/block:shadow-md'>
          <Block props='w-6 h-6 transition ease-in duration-300'
                 color={select.listStyle === 'block' ? '#e2e8f0' : '#475569'}></Block>
        </Selected>
      </ToggleContainer>
    </Container>
  );
};

export default ToggleButton;