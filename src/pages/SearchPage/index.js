import { WhiteCardContainer } from "../../styles/WhiteCardContainer.js";
import { AllHeader } from "../../styles/AllHeader";
import DbookTitle from "../../components/DbookshelfTitle/index";
import NavigationBar from "../../components/NavigationBar/index";
import LoginButton from "../../components/LoginButton/index";

import { RedCardContainerSearch } from "./RedCardContainerSearch/styled";
import { AllFooter } from "../../styles/AllFooter";

const SearchPage = () => {
  return (
    <>
      <WhiteCardContainer>
        <AllHeader>
          <DbookTitle />
          <NavigationBar />
          <LoginButton />
        </AllHeader>
        <RedCardContainerSearch></RedCardContainerSearch>
        <AllFooter>Footer</AllFooter>
      </WhiteCardContainer>
    </>
  );
};

export default SearchPage;
