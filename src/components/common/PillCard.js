import React from 'react';
import tw from 'tailwind-styled-components';

import Icon from '../../assets/Images/Category/vitamins.png';

const Container = tw.div`flex flex-row justify-around w-11/12 mx-auto rounded-xl shadow-md p-3 mt-3 bg-white`;

const PillInfo = tw.div`flex flex-col justify-items-center`;

const PillImgContainer = tw.div`ml-2 mr-3 rounded-xl bg-stone-100`;

const PillImg = tw.img`p-3 w-20 h-20 md:w-16 sm:h-16`;

const PillName = tw.p`pl-2 font-extrabold`;

const PillIngredientContainer = tw.div`flex flex-row`;

const PillIngredient = tw.div`mx-1 mt-2 text-sm px-2 rose-400 rounded-xl shadow-sm text-white bg-rose-400`;

const PillCard = ({ id, name, ingredient }) => {
  return (
    <Container>
      <PillImgContainer>
        <PillImg src={Icon} alt="이미지"></PillImg>
      </PillImgContainer>
      <PillInfo>
        <PillName>{name}</PillName>
        <PillIngredientContainer>
          {ingredient.map(({ name }) => {
            return <PillIngredient key={name}>{name}</PillIngredient>;
          })}
        </PillIngredientContainer>
      </PillInfo>
    </Container>
  );
};

export default PillCard;
