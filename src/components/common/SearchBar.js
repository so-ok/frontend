import { useState } from 'react';
import { useDispatch } from 'react-redux';
import tw from 'tailwind-styled-components';
import search from '../../assets/Images/search.png';
import { addListAction } from '../../modules/pills';

const SearchContainer = tw.div`relative my-4 flex flex-row w-11/12 mx-auto text-gray-600 gap-5`;

const SearchBarContainer = tw.form`relative flex w-full items-center`;

const SearchIcon = tw.img`absolute w-5 h-5 left-4`;

const SearchBarInput = tw.input`flex ml-auto p-3 pl-12 w-full h-14 text-md bg-white rounded-2xl focus:outline-rose-400 shadow-md`;

const Nav = tw.div`relative inline-block`;

const SearchMethod = tw.div`flex justify-center items-center font-bold text-md bg-white w-20 h-14 rounded-xl shadow-md 
transition ease-in-out delay-50 
active:bg-rose-400 hover:scale-100 duration-250 hover:bg-white hover:ring-1 hover:ring-rose-400 ring-inset`;

const DropDownContainer = tw.ul`absolute z-10 -right-12 mt-2 list-none list-outside bg-slate-50 shadow-md rounded-md divide-y divide-dotted`;

const Menu = tw.div`flex justify-start font-bold items-center w-32 h-12 px-3 transition ease-in-out delay-50 duration-250 hover:bg-rose-400 rounded-md hover:text-white`;

const searchMappings = {
  '이름': { name: 'name', asArray: false },
  '관심 분야': { name: 'attentions', asArray: true },
  '성분': { name: 'ingredients', asArray: true },
};

const SearchBar = () => {
  const dispatch = useDispatch();
  const [showDrop, setDrop] = useState(false);
  const [input, setInput] = useState('');
  const [searchMethod, setSearchMethod] = useState('이름');

  const handleDrop = () => {
    setDrop(!showDrop);
  };

  const handleChange = event => {
    setInput(event.target.value);
  };

  const handleOnClick = event => {
    event.preventDefault();
    setSearchMethod(event.target.id);
    setDrop(!showDrop);
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    dispatch(addListAction(getSearchPayload(searchMethod, input)));
  };
  const getSearchPayload = (searchMethodName, input) => {
    const searchMethod = searchMappings[searchMethodName];
    let payload = {};
    if (searchMethod.asArray) {
      payload[`${searchMethod.name}`] = input.split(',');
    } else {
      payload[`${searchMethod.name}`] = input;
    }
    return payload;
  };

  return (
    <SearchContainer>
      <Nav>
        <SearchMethod onClick={handleDrop} onBlur={handleDrop}>
          {searchMethod}
        </SearchMethod>
        {showDrop && (
          <DropDownContainer>
            <Menu onClick={handleOnClick} id='이름'>
              이름
            </Menu>
            <Menu onClick={handleOnClick} id='성분'>
              성분
            </Menu>
            <Menu onClick={handleOnClick} id='관심 분야'>
              관심 분야
            </Menu>
          </DropDownContainer>
        )}
      </Nav>
      <SearchBarContainer onSubmit={handleOnSubmit}>
        <SearchIcon src={search} alt='검색'></SearchIcon>
        <SearchBarInput type='search' name='search' onChange={handleChange}></SearchBarInput>
      </SearchBarContainer>
    </SearchContainer>
  );
};

export default SearchBar;
