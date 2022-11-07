import React from 'react';
import tw from 'tailwind-styled-components';

const Container = tw.div`flex flex-col shadow-md items-center bg-slate-50 rounded-xl p-1 transition ease-in-out delay-50 
hover:-translate-y-1 hover:scale-110 duration-250 hover:bg-white hover:ring-1 hover:ring-rose-400 ring-inset
`;

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
