import React from "react";
import hamberger from "../../assets/Images/hamberger.png";
import search from "../../assets/Images/search.png";

const Header = () => {
  return (
    <div className='h-32 flex flex-col justify-around'>
      <div className='flex inset-y-0 pl-6'>
        <img
          className='h-8 w-8 cursor-pointer hover:bg-zinc-200'
          src={hamberger}
          alt='햄버거'
        ></img>
      </div>
      <div className='relative text-gray-600'>
        <div className='flex absolute inset-y-0 items-center pl-9 pointer-events-none'>
          <img className='w-5 h-5' src={search} alt='검색'></img>
        </div>
        <div className='flex justify-center'>
          <input
            class='p-3 pl-10 w-11/12 text-md text-gray-700 bg-gray-200 rounded-2xl  focus:outline-blue-500'
            type='search'
            name='search'
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Header;
