import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearSampleAction, sampleAction } from '../../modules/sample';
import SampleComponent from '../../components/sample/SampleComponent';

const SampleContainer = () => {
  const dispatch = useDispatch();
  const { heesu } = useSelector(({ sample }) => ({ heesu: sample.sample }));

  const makeHeesu = (event) => {
    event.preventDefault();
    event.stopPropagation();

    dispatch(sampleAction('heesu'));
  };

  const removeHeesu = (event) => {
    event.preventDefault();
    event.stopPropagation();

    dispatch(clearSampleAction());
  };

  return (
    <SampleComponent
      heesu={heesu}
      makeHeesu={makeHeesu}
      removeHeesu={removeHeesu}
    />
  );
};

export default SampleContainer;
