import { InputDiv } from "./styled";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { handlingSearchThunk } from "../../store/modules/SearchBooks/thunks";

const SearchInputAndButton = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleInput = (ev) => {};
  return (
    <>
      <InputDiv>
        <input placeholder="Enter the book/author you´re searching for . ."></input>
        <button onClick={() => dispatch(handlingSearchThunk(value))}>
          Search
        </button>
      </InputDiv>
    </>
  );
};

export default SearchInputAndButton;
