import React from "react";
import tw from "tailwind-styled-components";

const StyledDiv = tw.div`
relative
my-2
`;
const StyledInput = tw.input`
block 
px-2.5 
pb-2.5 
pt-4 
w-full 
text-sm 
text-gray-900 
bg-transparent 
rounded-lg 
border
border-rose-400 
appearance-none 
dark:text-black
dark:border-rose-400
dark:focus:border-rose-400 
focus:outline-none 
focus:ring-0 
focus:border-rose-400
peer
`;
const StyledLabel = tw.label`
absolute 
text-sm 
text-gray-500 
dark:text-gray-400 
duration-300 
transform 
-translate-y-4 
scale-75 
top-2 
z-10 
origin-[0] 
bg-gray-100
dark:bg-gray-100 
px-2 
peer-focus:px-2 
peer-focus:text-rose-400
peer-focus:dark:text-rose-400 
peer-placeholder-shown:scale-100 
peer-placeholder-shown:-translate-y-1/2 
peer-placeholder-shown:top-1/2 
peer-focus:top-2 
peer-focus:scale-75 
peer-focus:-translate-y-4 
left-1
`;

const Input = ({ type, label, value, handleValue }) => {
  type = type ?? "text";
  label = label ?? "";
  value = value ?? "";
  handleValue = handleValue ?? (() => {});

  return (
    <StyledDiv>
      <StyledInput
        type={type}
        id="floating_outlined"
        placeholder=" "
        value={value}
        onChange={handleValue}
      />
      <StyledLabel for="floating_outlined">{label}</StyledLabel>
    </StyledDiv>
  );
};

export default Input;
