import tw from 'tailwind-styled-components';
import cart from '../../assets/Images/shopping_cart.png';
import PageHeader from '../common/PageHeader';
import Responsive from '../common/Responsive';

const PillImg = tw.img`w-68 h-68 mx-auto my-auto rounded-3xl shadow-md`;

const PillTitle = tw.div`flex justify-center text-xl font-semibold my-10 w-full `;

const IngredientContainer = tw.div`flex flex-col gap-1 ml-2`;

const IngredientBox = tw.div`w-11/12 mx-auto bg-slate-100 bg-white shadow-md rounded-lg px-3 py-2 mb-4`;

const IngredientTitle = tw.div`text-gray-700 text-lg font-semibold py-2 ml-4`;

const IngredientListBox = tw.div`flex flex-wrap justify-between items-center text-gray-700 rounded-md px-2 py-2 my-2`;

const IngredientName = tw.div`rounded-full bg-rose-400 text-md shadow-md text-white font-medium px-4 py-1 mb-1`;

const IngredientAmountUnit = tw.div`text-md font-bold text-gray-500 tracking-wide mb-1`;

const PillDetail = ({ pillDetail }) => {
  return (
    <Responsive>
      <PageHeader cart={cart} />
      <PillImg src={pillDetail.image}></PillImg>
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
    </Responsive>
  );
};

export default PillDetail;
