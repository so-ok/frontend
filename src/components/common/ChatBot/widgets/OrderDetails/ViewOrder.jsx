// eslint-disable-next-line
import React, { useState } from 'react';
import '../main.css';

function ViewOrder({ actionProvider, orderedItems }) {
  const [submit, setSubmit] = useState(false);

  let totalPrice = orderedItems.reduce(function(totalCost, item) {
    return totalCost + item.price;
  }, 0);
  const handleSubmit = () => {
    setSubmit(!submit);
    actionProvider.handleGreeting();
  };

  const orderID = Math.random().toString(36).substr(2, 5);
  return (
    <main>
      <div className='order'>
        <div>
          <b>Order ID: </b>
          &nbsp;{orderID}
        </div>
        <div>
          <b>Items ordered: </b>&nbsp;
          {orderedItems.map((item) => {
            return (
              <div>
                {item.itemName}-{item.quantity}
              </div>
            );
          })}
        </div>
        <div>
          <b>Cost:</b>
          &nbsp;{totalPrice}
        </div>
      </div>
      {!submit && <button onClick={handleSubmit}>Confirm</button>}
      {submit && <button disabled={true}>Confirm</button>}
    </main>
  );
}

export default ViewOrder;
