import React from 'react';
import PageHeader from '../components/common/PageHeader';
import cart from '../assets/Images/shopping_cart.png';
import Icon from '../assets/Images/Category/vitamins.png';
import tw from 'tailwind-styled-components';
import Responsive from '../components/common/Responsive';
import ProgressBar from '../components/ProgressBar';

const PillImgContainer = tw.div`mx-auto my-auto flex justify-center rounded-xl bg-stone-100 p-4 pt-6`;
const PillImg = tw.img`rounded p-3 w-48 h-48 `;
const PillTitle = tw.div`text-xl font-bold ml-3 p-2`;
const IngredientContainer = tw.div`flex flex-col gap-1 ml-2`;
const IngredientBox = tw.div`w-11/12 mx-auto bg-slate-100 bg-white shadow-md rounded-lg px-3 py-2 mb-4`;
const IngredientTitle = tw.div`text-gray-700 text-lg font-semibold py-2 ml-4`;
const IngredientListBox = tw.div`flex justify-between items-center text-gray-700 hover:text-rose-400 hover:bg-rose-100 rounded-md px-2 py-2 my-2`;
const IngredientName = tw.div`rounded-full bg-rose-400 text-md shadow-md text-white font-medium px-4 py-1`;
const IngredientAmountUnit = tw.div`text-md font-bold text-gray-500 tracking-wide`;

const PillDetailPage = ({ pillDetail }) => {
  return (
    <Responsive>
      <PageHeader cart={cart}> 상세페이지 </PageHeader>
      <PillImgContainer>
        <PillImg src={Icon}></PillImg>
      </PillImgContainer>
      <PillTitle>{pillDetail?.name}</PillTitle>
      <IngredientBox>
        <IngredientTitle>상세정보</IngredientTitle>
        <IngredientContainer>
          {pillDetail.ingredients &&
            pillDetail.ingredients.map(({ name, amount, unit }) => (
              <IngredientListBox key={name}>
                <IngredientName>{name}</IngredientName>
                <IngredientAmountUnit>
                  {Math.round(amount)}
                  {unit}
                </IngredientAmountUnit>
              </IngredientListBox>
            ))}
        </IngredientContainer>
      </IngredientBox>

      <IngredientBox>
        <ProgressBar value={10} maxValue={100}></ProgressBar>
      </IngredientBox>
    </Responsive>
  );
};

export default PillDetailPage;
