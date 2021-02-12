import { WhiteCardContainer } from "../../styles/WhiteCardContainer.js";
import { AllHeader } from "../../styles/AllHeader";
import DbookTitle from "../../components/DbookshelfTitle/index";
import NavigationBar from "../../components/NavigationBar/index";
// import LoginButton from "../../components/LoginButton/index";
import { RedCardContainerDescription } from "./RedCardContainerDescription/styled";
import { AllFooter } from "../../styles/AllFooter";
import {
  DescriptionCardContainer,
  ImgContainer,
  BookDescriptionContainer,
  FavoritesButtonContainer,
} from "./DescriptionCard/styled";
import { useSelector } from "react-redux";
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
          <DescriptionCardContainer>
            <ImgContainer>
              <img src={book.img} alt={book.title} />
            </ImgContainer>
            <BookDescriptionContainer>
              <h1>{book.title}</h1>
              <h2>{`Author: ${book.author}`}</h2>
              <h3>{`Publisher: ${book.publisher}`}</h3>
              <h3>{`Published: ${book.published}`}</h3>
              <p>{`Description: ${book.description}`}</p>
            </BookDescriptionContainer>
            <FavoritesButtonContainer>
              <button>Add to Favorites!</button>
            </FavoritesButtonContainer>
          </DescriptionCardContainer>
        </RedCardContainerDescription>
        <AllFooter>Footer</AllFooter>
      </WhiteCardContainer>
    </>
  );
};

export default DescriptionPage;
