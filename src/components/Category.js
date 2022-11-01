import React, { useEffect, useState } from "react";

import CategoryCard from "./common/CategoryCard";
import { CATEGORY_LIST } from "./common/CategoryList";

const Category = () => {
  const [categoryList, setCategoryList] = useState(CATEGORY_LIST);

  useEffect(() => {
    setCategoryList(CATEGORY_LIST);
  }, []);

  return (
    <div className='flex pt-4 justify-center'>
      <div className='grid grid-cols-3 w-11/12 gap-3 lg:grid-cols-4 lg:w-11/12 lg:gap-12'>
        {categoryList.map(({ name, description, imageUrl, pageUrl }) => (
          <CategoryCard
            name={name}
            description={description}
            imageUrl={imageUrl}
            pageUrl={pageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
