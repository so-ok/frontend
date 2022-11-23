import React from 'react';
import Responsive from '../components/common/Responsive';
import PageHeader from '../components/common/PageHeader';
import cart from '../assets/Images/shopping_cart.png';
import PillIngredients from '../components/PillIngredients';

const PillDetailPage = () => {
  return (
    <Responsive>
      <PageHeader cart={cart}> 상세페이지 </PageHeader>
      <PillIngredients id={'306'}></PillIngredients>
    </Responsive>
  );
};

export default PillDetailPage;
