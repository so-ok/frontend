import React, { useState } from 'react';

function Name({ actionProvider, userName, setState }) {
  const [submit, setSubmit] = useState(false);
  const [enable, setEnable] = useState(false);
  const [value, setValue] = useState();
  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    setEnable(true);
  };

  const handleSubmit = () => {
    if ([...value].length < 4) actionProvider.handleNameError();
    else {
      setSubmit(true);
      setState((state) => ({
        ...state,
        userName: value,
      }));

      actionProvider.handlePhone();
    }
  };

  return (
    <main>
      <label htmlFor="name">Name (4 to 20characters):</label>
      <input
        type="text"
        className="input"
        name="name"
        value={value}
        required
        minlength="4"
        maxlength="20"
        onChange={handleChange}
      ></input>
      {!submit && (
        <button onClick={handleSubmit} disabled={!enable}>
          Confirm
        </button>
      )}
      {submit && <button disabled={true}>✓ Confirmed</button>}
    </main>
  );
}

export default Name;
