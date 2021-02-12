import { WhiteCardContainer } from "../../styles/WhiteCardContainer.js";
import { AllHeader } from "../../styles/AllHeader";
import DbookTitle from "../../components/DbookshelfTitle/index";
import NavigationBar from "../../components/NavigationBar/index";
// import LoginButton from "../../components/LoginButton/index";
import SearchInputAndButton from "../../components/SearchInput-Button/index";
import { RedCardContainerSearch } from "./RedCardContainerSearch/styled";
import { AllFooter } from "../../styles/AllFooter";
import { SearchBarContainer } from "./SearchBarContainer/styled";
import BookInfo from "./BookCard/index";

import { useDispatch } from "react-redux";
import { handlingSearchThunk } from "../../store/modules/SearchBooks/thunks";
import { useSelector } from "react-redux";

const SearchPage = () => {
  const dispatch = useDispatch();

  const searched = useSelector((state) => state.infoBooks);
  console.log("Books Data: ", searched); //Retirar

  const toSearchBooksAPI = (value) => {
    console.log("inputSearchPage: ", value); //Retirar;
    dispatch(handlingSearchThunk(value));
  };
  return (
    <>
      <WhiteCardContainer>
        <AllHeader>
          <DbookTitle />
          <NavigationBar />
          {/* <LoginButton /> */}
        </AllHeader>
        <RedCardContainerSearch>
          <SearchBarContainer>
            <SearchInputAndButton func={toSearchBooksAPI} />
          </SearchBarContainer>
          <BookInfo />
        </RedCardContainerSearch>
        <AllFooter>Footer</AllFooter>
      </WhiteCardContainer>
    </>
  );
};

export default SearchPage;
