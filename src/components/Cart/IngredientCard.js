import { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import { Check } from '../common/SvgImport';

const IngredientListBox = tw.div`grid grid-cols-4 items-center justify-centers text-gray-700 rounded-md w-full my-4 mx-auto p-2`;

const IngredientInfo = tw.div`col-span-3 flex flex-col gap-3`;

const IngredientName = tw.div`w-fit text-xl font-bold px-4 `;

const ParentBar = tw.div`relative ml-1 bg-rose-200 rounded-full `;

const ChildBar = tw.div`bg-rose-500 flex items-center rounded-full h-2 text-white px-1 min-w-fit`;

const MinAmount = tw.div`absolute rounded-full w-7 h-7 border-2 border-rose-400 bg-white`;

const MaxAmount = tw.div`absolute rounded-full right-0 w-7 h-7 border-2 border-rose-400 bg-white`;

const Label = tw.div`mx-auto font-semibold`;

const IngredientCard = ({ name, amount, unit, maximumAmount, minimumAmount }) => {
  const [progress, setProgress] = useState(0);
  const [minProgress, setMinProgress] = useState(0);

  const isOverMin = () => progress >= minProgress;
  const isMax = () => progress >= 100;

  const state = () => {
    if (isMax()) {
      return '최대 섭취량 달성!';
    } else if (isOverMin()) {
      return '최소 섭취량 달성!';
    } else {
      return '최소 섭취량보다 부족해요!';
    }
  };

  const getRate = (amount, maximumAmount) => {
    const result = Math.round((amount / maximumAmount) * 100);
    if (isNaN(result)) {
      return 0;
    }
    return Math.min(result, 100);
  };

  useEffect(() => {
    setMinProgress(getRate(minimumAmount, maximumAmount));
    setProgress(getRate(amount, maximumAmount));
  }, [amount, minimumAmount, maximumAmount]);

  return (
    <IngredientListBox>
      <IngredientName>{name}</IngredientName>
      <IngredientInfo>
        <Label>{state()}</Label>
        <ParentBar>
          <ChildBar style={{ width: `${progress}%` }}>
            <MinAmount style={{ left: `${minProgress}%` }}>
              {isOverMin() && <Check props={'w-full h-full'} color={'#f43f5e'} />}
            </MinAmount>
            <MaxAmount>{isMax() && <Check props={'w-full h-full'} color={'#f43f5e'} />}</MaxAmount>
          </ChildBar>
        </ParentBar>
      </IngredientInfo>
    </IngredientListBox>
  );
};

export default IngredientCard;
