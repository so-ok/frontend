import React from "react";
import tw from "tailwind-styled-components";

const Container = tw.div`flex flex-col shadow-md items-center rounded-xl`;

const CategoryCardImg = tw.img`w-7 h-7`;

const CategoryCardP = tw.p`font-semibold pt-3`;

const CategoryCard = ({ name, description, imageUrl, pageUrl }) => {
  return (
    <Container>
      <CategoryCardImg src={imageUrl} alt={description}></CategoryCardImg>
      <CategoryCardP>{name}</CategoryCardP>
    </Container>
  );
};

export default CategoryCard;
