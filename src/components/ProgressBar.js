import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import Responsive from './common/Responsive';

const ParentBar = tw.div`
bg-rose-200 rounded-full overflow-hidden`;

const ChildBar = tw.div`
bg-rose-500 flex items-center h-5 text-white`;

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
        <ChildBar style={{ width: `${progress}%` }}>{progress}</ChildBar>
      </ParentBar>
    </Responsive>
  );
};

export default ProgressBar;
