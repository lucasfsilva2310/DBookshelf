import { WhiteCardContainer } from "../../styles/WhiteCardContainer.js";
import { AllHeader } from "../../styles/AllHeader";
import DbookTitle from "../../components/DbookshelfTitle/index";
import NavigationBar from "../../components/NavigationBar/index";
import LoginButton from "../../components/LoginButton/index";
import { RedCardContainer } from "../../styles/RedCardContainer";
import MainDescription from "./MainDescription/index";
import SecondDescription from "./SecondDescription/index";
import { AllFooter } from "../../styles/AllFooter";
import SearchInputAndButton from "../../components/SearchInput-Button/index";

const HomePage = () => {
  return (
    <>
      <WhiteCardContainer>
        <AllHeader>
          <DbookTitle />
          <NavigationBar />
          <LoginButton />
        </AllHeader>
        <RedCardContainer>
          <MainDescription />
          <SecondDescription />
          <SearchInputAndButton />
        </RedCardContainer>
        <AllFooter>Footer</AllFooter>
      </WhiteCardContainer>
    </>
  );
};

export default HomePage;
