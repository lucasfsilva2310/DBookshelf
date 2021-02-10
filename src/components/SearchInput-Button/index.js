import { InputDiv } from "./styled";

const SearchInputAndButton = () => {
  return (
    <>
      <InputDiv>
        <input placeholder="Enter the book/author you´re searching for . ."></input>
        <button>Search</button>
      </InputDiv>
    </>
  );
};

export default SearchInputAndButton;
