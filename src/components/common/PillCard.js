import React from 'react';
import tw from 'tailwind-styled-components';

import Icon from '../../assets/Images/Category/vitamins.png';

const Container = tw.div`grid grid-cols-4 gap-6 items-start w-11/12 mx-auto rounded-xl shadow-md p-3 mt-3 bg-white`;

const PillInfo = tw.div`col-span-3 gap-2 flex flex-col justify-center`;

const PillImgContainer = tw.div`mx-auto my-auto rounded-xl bg-stone-100`;

const PillImg = tw.img`p-3 w-20 h-20 md:w-16 sm:h-16`;

const PillName = tw.p`pl-2 font-bold`;

const IngredientContainer = tw.div`flex flex-row flex-wrap gap-1 ml-2`;

const Ingredient = tw.div`text-sm px-2 rose-400 rounded-xl shadow-sm text-white bg-rose-400`;

const PillCard = ({ id, name, ingredient }) => {
  return (
    <Container>
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
    </Container>
  );
};

export default PillCard;
