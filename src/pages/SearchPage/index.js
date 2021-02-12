import { WhiteCardContainer } from "../../styles/WhiteCardContainer.js";
import { AllHeader } from "../../styles/AllHeader";
import DbookTitle from "../../components/DbookshelfTitle/index";
import NavigationBar from "../../components/NavigationBar/index";
import LoginButton from "../../components/LoginButton/index";
import SearchInputAndButton from "../../components/SearchInput-Button/index";
import { RedCardContainerSearch } from "./RedCardContainerSearch/styled";
import { AllFooter } from "../../styles/AllFooter";
import { SearchBarContainer } from "./SearchBarContainer/styled";
import BookInfo from "./BookCard/index";

const SearchPage = () => {
  const toSearchBooksAPI = (value) => {
    console.log("inputSearchPage: ", value); //Retirar;
  };
  return (
    <>
      <WhiteCardContainer>
        <AllHeader>
          <DbookTitle />
          <NavigationBar />
          <LoginButton />
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
