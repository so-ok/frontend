import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';

import CategoryCard from './common/CategoryCard';
import { CATEGORY_LIST } from './common/CategoryList';

const Container = tw.div`flex pt-4 justify-center`;

const CategoryContainer = tw.div`grid grid-cols-4 w-11/12 gap-2`;

const Category = () => {
  const [categoryList, setCategoryList] = useState(CATEGORY_LIST);

  useEffect(() => {
    setCategoryList(CATEGORY_LIST);
  }, []);

  return (
    <Container>
      <CategoryContainer>
        {categoryList.map(({ name, description, imageUrl, pageUrl }) => (
          <CategoryCard
            key={name}
            name={name}
            description={description}
            imageUrl={imageUrl}
            pageUrl={pageUrl}
          />
        ))}
      </CategoryContainer>
    </Container>
  );
};

export default Category;
