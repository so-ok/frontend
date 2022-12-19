import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';

const ParentBar = tw.div`ml-1 bg-rose-200 rounded-full overflow-hidden`;

const ChildBar = tw.div`
bg-rose-500 flex items-center rounded-full h-5 text-white px-1 min-w-fit`;

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
    <ParentBar>
      <ChildBar style={{ width: `${progress}%` }}>
        <Amount>{progress}%</Amount>
      </ChildBar>
    </ParentBar>
  );
};

export default ProgressBar;
