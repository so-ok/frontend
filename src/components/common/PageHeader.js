import React from 'react';
import Responsive from './Responsive';
import back from '../../assets/Images/back_arrow.png';

import { useNavigate } from 'react-router-dom';

const PageHeader = ({ children, cart = null }) => {
  const onPickPill = () => {
    //제품을 카트에 담으세요
  };
  const navigate = useNavigate();
  return (
    <Responsive>
      <div className="grid grid-cols-6 gap-4 pt-10 place-items-center">
        <button className="col-start-1 ml-2" onClick={() => navigate(-1)}>
          <img src={back} alt="back_arrow" className="w-5 h-5"></img>
        </button>
        <h3 className="col-start-3 col-span-2 text-center">{children}</h3>
        {cart && (
          <div className="grid grid-cols-4 col-start-6">
            <button className="col-start-6 mr-4" onClick={onPickPill}>
              <img
                src={cart}
                alt="shopping_cart_icon"
                className="w-5 h-5 ml-2"
              ></img>
            </button>
          </div>
        )}
      </div>
    </Responsive>
  );
};

export default PageHeader;
