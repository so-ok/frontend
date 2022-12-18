import React from 'react';
import tw from 'tailwind-styled-components';

import { Link } from 'react-router-dom';

const PillCardContainer = tw(Link)`grid grid-cols-4 gap-6 items-start w-full rounded-xl shadow-md p-3 mt-3 bg-white`;

const PillInfo = tw.div`col-span-3 gap-2 flex flex-col justify-center`;

const PillImg = tw.img`w-24 h-24 mx-auto my-auto`;

const PillName = tw.p`pl-2 font-bold`;

const IngredientContainer = tw.div`flex flex-row flex-wrap gap-1 ml-2`;

const Ingredient = tw.div`text-sm px-2 rose-400 rounded-xl shadow-sm text-white bg-rose-400`;

const PillListCard = ({ id, name, ingredient, image }) => {
  return (
    <PillCardContainer to={`/detail/${id}`}>
      <PillImg src={image} alt="img"></PillImg>
      <PillInfo>
        <PillName>{name}</PillName>
        <IngredientContainer>
          {ingredient?.map(({ name }) => (
            <Ingredient key={name}>{name}</Ingredient>
          ))}
        </IngredientContainer>
      </PillInfo>
    </PillCardContainer>
  );
};

export default PillListCard;
