import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import Responsive from './Responsive';

const ParentBar = tw.div`
bg-rose-200 rounded-full overflow-hidden`;

const ChildBar = tw.div`
bg-rose-500 flex items-center rounded-full h-5 text-white transition-transform ease-in-out delay-150`;

const Amount = tw.p`mx-auto`;

const ProgressBar = ({ value, maxValue }) => {
  const [progress, setProgress] = useState(0);

  const getRate = (value, maxValue) => {
    const result = Math.round((value / maxValue) * 100);
    if (isNaN(result)) {
      return 0;
    }
    return result;
  };

  useEffect(() => {
    setProgress(getRate(value, maxValue));
  }, [value, maxValue]);

  return (
    <Responsive>
      <ParentBar>
        <ChildBar style={{ width: `${progress}%` }}>
          <Amount>{progress}</Amount>
        </ChildBar>
      </ParentBar>
    </Responsive>
  );
};

export default ProgressBar;
