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

import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";
import { handlingSearchThunk } from "../../store/modules/SearchBooks/thunks";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const SearchPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    document.body.style.cursor = "default";
  }, []);

  const searched = useSelector((state) => state.infoBooks);
  console.log("Books DataSearchPage: ", searched); //Retirar

  // useEffect(() => {
  //   setTimeout(() => window.location.reload(), 1500);
  // }, [searched]);

  const toSearchBooksAPI = (value) => {
    const forSearch = value.split(" ").join("+");
    document.body.style.cursor = "wait";
    setTimeout(() => {
      history.push("/");
      history.push("/search");
    }, 1500);

    console.log("inputSearchPage: ", forSearch); //Retirar;
    dispatch(handlingSearchThunk(forSearch));
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
        <AllFooter></AllFooter>
      </WhiteCardContainer>
    </>
  );
};

export default SearchPage;
