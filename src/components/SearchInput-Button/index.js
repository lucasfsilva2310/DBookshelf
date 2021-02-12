import { InputDiv } from "./styled";
import { useState } from "react";
import { useSelector } from "react-redux";

const SearchInputAndButton = ({ func }) => {
  const [value, setValue] = useState("");
  const searched = useSelector((state) => state.infoBooks);
  console.log("Books Data: ", searched); //Retirar
  const handleInput = (ev) => {
    setValue(ev.target.value);
  };
  return (
    <>
      <InputDiv>
        <input
          onChange={handleInput}
          placeholder="Enter the book/author you´re searching for . ."
        ></input>
        <button onClick={() => func(value)}>Search</button>
      </InputDiv>
    </>
  );
};

export default SearchInputAndButton;
