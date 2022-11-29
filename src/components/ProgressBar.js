import React from 'react';
import tw from 'tailwind-styled-components';

const Container = tw.div`relative`;

const ParentBar = tw.div`
bg-rose-100 dark:bg-slate-700 rounded-full overflow-hidden`;

const ChildBar = tw.div`
bg-rose-500 dark:bg-rose-400`;

const ProgressBar = (value, maxValue) => {
  const getRate = (value, maxValue) => {
    return value / maxValue;
  };

  return (
    <Container>
      <ParentBar>
        <ChildBar>
          <div
            style={{ width: `${getRate(value, maxValue)}%` }}
            className="bg-primary absolute top-0 left-0 flex h-full items-center justify-center rounded-2xl text-xs font-semibold text-white"
          >
            75%
          </div>
        </ChildBar>
      </ParentBar>
    </Container>
  );
};

export default ProgressBar;
