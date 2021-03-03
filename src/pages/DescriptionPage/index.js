import { WhiteCardContainer } from "../../styles/WhiteCardContainer.js";
import { AllHeader } from "../../styles/AllHeader";
import DbookTitle from "../../components/DbookshelfTitle/index";
import NavigationBar from "../../components/NavigationBar/index";
// import LoginButton from "../../components/LoginButton/index";
import { RedCardContainerDescription } from "./RedCardContainerDescription/styled";
import { AllFooter } from "../../styles/AllFooter";
import { useSelector } from "react-redux";
import CardDescriptionPage from "./DescriptionCard/index";
import { useEffect } from "react";

const DescriptionPage = () => {
  const book = useSelector((state) => state.descriptionBook);

  useEffect(() => {
    document.body.style.cursor = "default";
  }, []);

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
        <AllFooter></AllFooter>
      </WhiteCardContainer>
    </>
  );
};

export default DescriptionPage;
