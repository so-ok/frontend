import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import { CATEGORY_LIST } from '../../../../lib/data/CategoryList';
import CategoryCard from '../../../Category/CategoryCard';

const CardContainer = tw.div`flex flex-wrap justify-center`;

const Attention = ({ actionProvider, setState }) => {
  const [categoryList, setCategoryList] = useState(CATEGORY_LIST);
  const handleAttentionSelection = () => actionProvider.handleAttentionSelection();

  const setSelectedAttention = (name) => setState((previousState) => ({
    ...previousState,
    selectedAttention: name,
  }));

  const selectAttention = (name) => {
    setSelectedAttention(name);
    handleAttentionSelection();
  }

  useEffect(() => {
    setCategoryList(CATEGORY_LIST);
  }, []);

  return (
    <CardContainer>
      {categoryList.map(({ name, imageUrl }) => (
        <CategoryCard
          key={name}
          name={name}
          cardStyle={'flex-row gap-2 justify-center mx-2 mt-2 p-2'}
          imgSize={'w-7 h-7'}
          imageUrl={imageUrl}
          clickHandler={() => selectAttention(name)}
        />
      ))}
    </CardContainer>
  );
};

export default Attention;
