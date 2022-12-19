import { useNavigate } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import { Back } from '../common/SvgImport';
import PillBlockCard2 from '../Pill/PillBlockCard2';
import IngredientCard from './IngredientCard';

const Container = tw.div`flex flex-col mx-auto my-4 gap-6`;

const PillTitle = tw.div`flex flex-col items-center rounded-xl gap-6 justify-center bg-white mx-auto text-xl font-semibold w-11/12 shadow-md p-2`;

const PillList = tw.div`flex flex-row my-4 py-2 overflow-scroll w-full gap-2`;

const BackButton = tw.div`w-11/12 mt-3 left-3 top-2`;

const ReportContainer = tw.div`flex flex-col w-11/12 mx-auto rounded-xl shadow-md bg-white`;

const Cart = ({ pillIngredient, cartPillList }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <PillTitle>
        <BackButton onClick={() => navigate(-1)}>
          <Back props={'w-8 h-8'} color={'#f43f5e'} />
        </BackButton>
        <PillList>
          {cartPillList && cartPillList.map(({ id, ingredient, name, image }) => <PillBlockCard2 name={name} image={image} id={id} key={id} ingredient={ingredient}/>)}
        </PillList>
      </PillTitle>
      <ReportContainer>
        {pillIngredient &&
          pillIngredient.map(({ name, amount, unit, maximumAmount, minimumAmount }) => (
            <IngredientCard
              key={name}
              name={name}
              amount={amount}
              unit={unit}
              maximumAmount={maximumAmount}
              minimumAmount={minimumAmount}
            />
          ))}
      </ReportContainer>
    </Container>
  );
};

export default Cart;
