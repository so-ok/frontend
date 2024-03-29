import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import { addCART, deleteCART } from '../../modules/cart';
import Responsive from '../common/Responsive';
import { Back, Check, Plus } from '../common/SvgImport';

const PillTitle = tw.div`flex flex-col items-center rounded-xl gap-6 justify-center bg-white mx-auto mb-6 text-xl font-semibold w-11/12 shadow-md p-2`;

const PillImg = tw.img`w-68 h-68 rounded-2xl`;

const IngredientContainer = tw.div`flex flex-col gap-1 ml-2`;

const IngredientBox = tw.div`w-11/12 mx-auto bg-slate-100 bg-white shadow-md rounded-lg px-3 py-2 mb-4`;

const IngredientTitle = tw.div`text-gray-700 text-lg font-semibold py-2 ml-4`;

const IngredientListBox = tw.div`flex flex-wrap justify-between items-center text-gray-700 rounded-md px-2 py-2 my-2`;

const IngredientName = tw.div`rounded-full bg-rose-400 text-md shadow-md text-white font-medium px-4 py-1 mb-1`;

const BackButton = tw.div`w-11/12 mt-3`;

const IngredientAmountUnit = tw.div`text-md font-bold text-gray-500 tracking-wide mb-1`;

const LikeButton = tw.div`flex flex-row bg-rose-400 w-12 h-12 items-center justify-center rounded-full shadow-md`;

const PillDetail = ({ pillDetail }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart } = useSelector(state => state.cart);
  
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setAdded(cart.includes(pillDetail.id));
  }, []);

  const onClickHandler = () => {
    if (cart.includes(pillDetail.id)) {
      dispatch(deleteCART(pillDetail.id));
    }
    else {
      dispatch(addCART(pillDetail.id));
    }
    setAdded(!added);
  };

  return (
    <Responsive className={'my-4'}>
      <PillTitle>
        <BackButton onClick={() => navigate(-1)} className={'left-0'}>
          <Back props={'w-8 h-8'} color={'#f43f5e'} />
        </BackButton>
        <PillImg src={pillDetail.image}></PillImg>
        {pillDetail?.name}
        <LikeButton onClick={onClickHandler}>
          {added ? <Check color={'white'} props={'w-10 h-10'} /> : <Plus color={'white'} props={'w-10 h-10'} />}
        </LikeButton>
      </PillTitle>
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
