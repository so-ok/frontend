import React from 'react';
import tw from 'tailwind-styled-components';
import Icon from '../../assets/Images/Category/vitamins.png';
import { Link } from 'react-router-dom';

const PillBlockCardContainer = tw(Link)`gap-2 mx-auto w-5/12 rounded-xl shadow-md p-2 mt-3 bg-white`;

const PillImgContainer = tw.div`mx-auto rounded-xl bg-stone-100`;

const PillInfo = tw.div`gap-2 flex flex-col justify-center`;

const PillImg = tw.img`p-3 w-32 h-32 sm:w-16 sm:h-16`;

const PillName = tw.p`pl-2 font-bold`;

const IngredientContainer = tw.div`flex flex-row flex-wrap gap-1 ml-2`;

const Ingredient = tw.div`text-sm px-2 rose-400 rounded-xl shadow-sm text-white bg-rose-400`;


const PillBlockCard = ({ id, name, ingredient }) => {
  return (
    <PillBlockCardContainer to={`/detail/${id}`}>
      <PillImgContainer>
        <PillImg src={Icon} alt='img'></PillImg>
      </PillImgContainer>
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