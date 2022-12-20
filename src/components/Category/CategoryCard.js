import React from 'react';
import tw from 'tailwind-styled-components';
import { useDispatch } from 'react-redux';
import { selectedCategory } from '../../modules/category';

const Container = tw.div`flex shadow-md items-center bg-white rounded-xl p-1 transition ease-in-out delay-50 active:bg-rose-400
hover:-translate-y-1 hover:scale-110 duration-250 hover:bg-white hover:ring-1 hover:ring-rose-400 ring-inset`;

const CategoryCardP = tw.p`font-bold text-xs md:text-sm xl:text-base`;

const CategoryCard = ({ cardStyle, imgSize, textStyle, name, description, imageUrl, clickHandler }) => {
  const dispatch = useDispatch();

  const categorySelect = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(selectedCategory(name));
  };

  return (
    <Container onClick={clickHandler ? clickHandler : categorySelect} className={cardStyle}>
      <img src={imageUrl} alt={description} className={imgSize}></img>
      <CategoryCardP className={textStyle}>{name}</CategoryCardP>
    </Container>
  );
};

export default CategoryCard;
