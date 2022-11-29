import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';

const ParentBar = tw.div`
bg-rose-100 rounded-full overflow-hidden`;

const ChildBar = tw.div`
bg-rose-500 flex items-center justify-center h-10`;

const ProgressBar = ({ value, maxValue }) => {
  const [progress, setProgress] = useState(0);

  const getRate = (value, maxValue) => {
    const result = value / maxValue * 100;
    if (isNaN(result)) {
      return 0;
    }
    return result;
  }

  useEffect(() => {
    setProgress(getRate(value, maxValue));
  }, [value, maxValue]);

  return (
    <ParentBar>
      <ChildBar style={{ width: `${progress}%` }}>
        {progress}
      </ChildBar>
    </ParentBar>
  );
};

export default ProgressBar;
