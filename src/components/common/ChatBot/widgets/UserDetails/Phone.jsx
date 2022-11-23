import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import "../main.css";

function Phone({ actionProvider, userPhone, setState }) {
  const [submit, setSubmit] = useState(false);
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if ([...value].length !== 13) actionProvider.handlePhoneError();
    else {
      setSubmit(!submit);
      setState((state) => ({
        ...state,
        userPhone: value
      }));

      actionProvider.handleViewOrder();
    }
  };

  return (
    <main>
      <PhoneInput
        className="input"
        placeholder="Enter phone number"
        value={value}
        onChange={setValue}
      />
      {!submit && <button onClick={handleSubmit}>Confirm</button>}
      {submit && <button disabled={true}>✓ Confirmed</button>}
    </main>
  );
}
export default Phone;
