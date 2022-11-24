import React, { useState } from 'react';
import '../main.css';
import data from './datas/AttentionList';

function Attentions({ actionProvider, selectedAttentions, setState }) {
  const [submit, setSubmit] = useState(false);
  const [top, setAttention] = useState('');
  const [enable, setEnable] = useState(false);

  function handleChange(e) {
    if (e.target.value !== 'none') {
      setEnable(true);
      setAttention(e.target.value);
    } else setEnable(false);
  }

  function handleSubmit() {
    setSubmit(true);
    setState((state) => ({
      ...state,
      selectedAttentions: top,
    }));
    actionProvider.handleMenu();
  }

  return (
    <main>
      <select
        className='input'
        name='Choose from below'
        value={top.item}
        onChange={(e) => handleChange(e)}
      >
        <option value='none'>관심 항목</option>
        {data.map((Attention) => {
          return (
            <option key={Attention.id} value={Attention.item}>
              {Attention.item}
            </option>
          );
        })}
      </select>
      <div>
        {!submit && (
          <button onClick={handleSubmit} disabled={!enable}>
            확인
          </button>
        )}
        {submit && <button disabled={enable}>✓ 선택완료</button>}
      </div>
    </main>
  );
}

export default Attentions;
