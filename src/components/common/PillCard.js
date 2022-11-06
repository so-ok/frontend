import React from 'react';
import tw from 'tailwind-styled-components';

import Icon from '../../assets/Images/Category/eye.png';

const Container = tw.div`w-11/12 mx-auto rounded-xl shadow-md p-4 mt-2`;

const PillInfo = tw.div`grid grid-cols-6 gap-2`;

const PillImgContainer = tw.div`row-span-2 mx-auto`;

const PillImg = tw.img`w-20 h-20`;

const PillName = tw.p`col-span-3 col-start-3 font-extrabold`;

const PillIngredient = tw.p`col-span-3 col-start-3`;

const PillCard = ({ id, name, ingredient, imge }) => {
  return (
    <Container>
      <PillInfo>
        <PillImgContainer>
          <PillImg src={Icon} alt="이미지"></PillImg>
        </PillImgContainer>
        <PillName>{name}</PillName>
        <PillIngredient>{ingredient['프로바이오틱스']}</PillIngredient>
      </PillInfo>
    </Container>
  );
};

export default PillCard;
