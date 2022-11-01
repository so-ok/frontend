import React from "react";

const SampleComponent = ({heesu, makeHeesu, removeHeesu}) => {
  return <div>
    <p>{heesu}</p>
    <button onClick={makeHeesu}>희수 만들기</button>
    <button onClick={removeHeesu}>희수 없애기</button>
  </div>

}

export default SampleComponent;
