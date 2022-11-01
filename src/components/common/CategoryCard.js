import React from "react";

const CategoryCard = ({ name, description, imageUrl, pageUrl }) => {
  return (
    <div className='flex flex-col shadow-md items-center rounded-xl'>
      <img className='w-20 h-20' src={imageUrl} alt={description}></img>
      <p className='font-semibold pt-3'>{name}</p>
    </div>
  );
};

export default CategoryCard;
