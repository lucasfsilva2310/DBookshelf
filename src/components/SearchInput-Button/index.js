import { InputDiv } from "./styled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { handlingSearchThunk } from "../../store/modules/SearchBooks/thunks";

const SearchInputAndButton = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

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
        <button onClick={() => dispatch(handlingSearchThunk(value))}>
          Search
        </button>
      </InputDiv>
    </>
  );
};

export default SearchInputAndButton;
