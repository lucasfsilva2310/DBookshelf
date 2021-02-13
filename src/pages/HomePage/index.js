import { WhiteCardContainer } from "../../styles/WhiteCardContainer.js";
import { AllHeader } from "../../styles/AllHeader";
import DbookTitle from "../../components/DbookshelfTitle/index";
import NavigationBar from "../../components/NavigationBar/index";
// import LoginButton from "../../components/LoginButton/index";
// import RegisterButton from "../../components/RegisterButton/index";
import { RedCardContainer } from "../../styles/RedCardContainer";
import MainDescription from "./MainDescription/index";
import SecondDescription from "./SecondDescription/index";
import { AllFooter } from "../../styles/AllFooter";
import SearchInputAndButton from "../../components/SearchInput-Button/index";

import { useDispatch } from "react-redux";
import { handlingSearchThunk } from "../../store/modules/SearchBooks/thunks";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const toSearchBooksApi = (value) => {
    console.log("Input Digitado: ", value);
    dispatch(handlingSearchThunk(value));
    setTimeout(() => history.push("/search"), 1500);
    //1 segundo e meio de delay, verificar se isso é o suficente para a API do google;
  };

  return (
    <>
      <WhiteCardContainer>
        <AllHeader>
          <DbookTitle />
          <NavigationBar />
          {/* <LoginButton /> */}
        </AllHeader>
        <RedCardContainer>
          {/* <RegisterButton /> */}
          <MainDescription />
          <SecondDescription />
          <SearchInputAndButton func={toSearchBooksApi} />
        </RedCardContainer>
        <AllFooter>Footer</AllFooter>
      </WhiteCardContainer>
    </>
  );
};

export default HomePage;
