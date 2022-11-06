import React from 'react';
import tw from 'tailwind-styled-components';

const Container = tw.div`flex flex-col shadow-md items-center rounded-xl p-1`;

const CategoryCardImg = tw.img`w-7 h-7`;

const CategoryCardP = tw.p`font-bold pt-3 text-xs md:text-sm xl:text-base`;

const CategoryCard = ({ name, description, imageUrl, pageUrl }) => {
  return (
    <Container>
      <CategoryCardImg src={imageUrl} alt={description}></CategoryCardImg>
      <CategoryCardP>{name}</CategoryCardP>
    </Container>
  );
};

export default CategoryCard;
