import { WhiteCardContainer } from "../../styles/WhiteCardContainer.js";
import { AllHeader } from "../../styles/AllHeader";
import DbookTitle from "../../components/DbookshelfTitle/index";
import NavigationBar from "../../components/NavigationBar/index";
// import LoginButton from "../../components/LoginButton/index";
import { RedCardContainerDescription } from "./RedCardContainerDescription/styled";
import { AllFooter } from "../../styles/AllFooter";
import { useSelector } from "react-redux";
import CardDescriptionPage from "./DescriptionCard/index";

const DescriptionPage = () => {
  const book = useSelector((state) => state.descriptionBook);

  return (
    <>
      <WhiteCardContainer>
        <AllHeader>
          <DbookTitle />
          <NavigationBar />
          {/* <LoginButton /> */}
        </AllHeader>
        <RedCardContainerDescription>
          <CardDescriptionPage book={book} />
        </RedCardContainerDescription>
        <AllFooter>Footer</AllFooter>
      </WhiteCardContainer>
    </>
  );
};

export default DescriptionPage;
