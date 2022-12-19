import React from 'react';
import back from '../../assets/Images/back_arrow.png';

import { useNavigate } from 'react-router-dom';

const PageHeader = ({ children, cart = null }) => {
  const onPickPill = () => {
    //제품을 카트에 담으세요
  };
  const navigate = useNavigate();
  return (
    <div className="flex justify-between w-11/12 mx-auto my-6">
      <button className="" onClick={() => navigate(-1)}>
        <img src={back} alt="back_arrow" className="w-7 h-7"></img>
      </button>
      <h3 className="">{children}</h3>
      {cart && (
        <div className="">
          <button className="" onClick={onPickPill}>
            <img src={cart} alt="shopping_cart_icon" className="w-7 h-7"></img>
          </button>
        </div>
      )}
    </div>
  );
};

export default PageHeader;
