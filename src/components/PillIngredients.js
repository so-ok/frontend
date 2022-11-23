import React, { useState } from 'react';
import Responsive from './common/Responsive';
import tw from 'tailwind-styled-components';
import client from '../lib/api/client.js';

const PillIngredients = ({ id }) => {
  const [ingredient, setIngredient] = useState([]);
  console.log(ingredient);
  client.get(`/api/pill/${id}`).then((response) => {
    console.log(response.data.ingredients);
  });

  return (
    <Responsive>
      <div>
        <h2>영양성분 정보</h2>
        <div className="flex">
          <div className="w-60 h-10 shdow-md rounded-full bg-white text-center inline-block align-middle">
            프로바이오틱스
          </div>
          <div>양</div>
          <div>단위</div>
        </div>
      </div>
    </Responsive>
  );
};

export default PillIngredients;