import React from 'react';

function Options(props) {
  const data = [
    {
      text: '네',
      handler: props.actionProvider.handleAttention,
      id: 1,
    },
    {
      text: '아니오',
      handler: props.actionProvider.handleBye,
      id: 2,
    },
  ];
  const optionsList = data.map((option) => (
    <button key={option.id} onClick={option.handler}>
      {option.text}
    </button>
  ));
  return (
    <div>
      <p>{optionsList}</p>
    </div>
  );
}

export default Options;
