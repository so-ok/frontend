import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {clearSampleAction, sampleAction} from "../modules/sample";

const SampleContainer = () => {
  const dispatch = useDispatch();
  const {heesu} = useSelector(({sample}) => ({heesu: sample.sample}))

  const makeHeesu = (event) => {
    event.preventDefault();
    event.stopPropagation();

    dispatch(sampleAction('heesu'));
  }

  const removeHeesu = (event) => {
    event.preventDefault();
    event.stopPropagation();

    dispatch(clearSampleAction())
  }

  return <div>
    {heesu}
    <button onClick={makeHeesu}>희수 만들기</button>
    <button onClick={removeHeesu}>희수 없애기</button>
  </div>
}

export default SampleContainer;
