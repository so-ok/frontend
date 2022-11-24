import React, { useEffect, useState } from 'react';
import { CATEGORY_LIST } from '../../lib/data/CategoryList';

import CategoryCard from './CategoryCard';
import tw from 'tailwind-styled-components';

const Container = tw.div`flex pt-4 justify-center`;

const CardContainer = tw.div`grid grid-cols-4 w-11/12 gap-2`;


const Category = () => {
  const [categoryList, setCategoryList] = useState(CATEGORY_LIST);

  useEffect(() => {
    setCategoryList(CATEGORY_LIST);
  }, []);

  return (
    <Container>
      <CardContainer>
        {categoryList.map(({ name, imageUrl }) => (
          <CategoryCard
            key={name}
            name={name}
            imageUrl={imageUrl}
          />
        ))}
      </CardContainer>
    </Container>);
};

export default Category;
