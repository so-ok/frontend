import React from 'react';
import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';

const PillBlockCardContainer = tw(Link)`gap-2 mx-auto w-5/12 rounded-xl shadow-md p-2 mt-3 bg-white`;

const PillInfo = tw.div`gap-2 flex flex-col justify-center`;

const PillImg = tw.img`p-3 w-32 h-32 mx-auto my-auto`;

const PillName = tw.p`mx-1 mt-1 font-bold`;

const IngredientContainer = tw.div`flex flex-row flex-wrap gap-1 mx-1 my-1`;

const Ingredient = tw.div`text-sm px-2 rose-400 rounded-xl shadow-sm text-white bg-rose-400`;

const PillBlockCard = ({ id, name, ingredient, image }) => {
  return (
    <PillBlockCardContainer to={`/detail/${id}`}>
      <PillImg src={image} alt="img"></PillImg>
      <PillInfo>
        <PillName>{name}</PillName>
        <IngredientContainer>
          {ingredient?.map(({ name }) => (
            <Ingredient key={name}>{name}</Ingredient>
          ))}
        </IngredientContainer>
      </PillInfo>
    </PillBlockCardContainer>
  );
};

export default PillBlockCard;
