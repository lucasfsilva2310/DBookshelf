import { WhiteCardContainer } from "../../styles/WhiteCardContainer.js";
import { AllHeader } from "../../styles/AllHeader";
import DbookTitle from "../../components/DbookshelfTitle/index";
import NavigationBar from "../../components/NavigationBar/index";
import { RedCardContainerFavorites } from "./RedCardContainerFavorites/styled";
import { AllFooter } from "../../styles/AllFooter";
import {
  BookCardsContainer,
  BookCard,
  ImgContainerFav,
  TitleContainerFav,
  DescriptionContainerFav,
  RemoveFromFavButtonContainer,
} from "./CardsContainer/styled";
import { useEffect } from "react";

const FavoritesPage = () => {
  const books = JSON.parse(localStorage.getItem("books"));
  useEffect(() => {}, [books]);
  const removeFromLocalStorage = (titleRemoved) => {
    console.log("removeFromStorage: ", titleRemoved);
    let removedBooks = books.filter((book) => book.title !== titleRemoved);
    localStorage.setItem("books", JSON.stringify(removedBooks));
  };
  return (
    <WhiteCardContainer>
      <AllHeader>
        <DbookTitle />
        <NavigationBar />
      </AllHeader>
      <RedCardContainerFavorites>
        <BookCardsContainer>
          {books.map((book, index) => {
            return (
              <BookCard>
                <TitleContainerFav>
                  <h1>{book.title}</h1>
                </TitleContainerFav>
                <ImgContainerFav>
                  <img src={book.img} alt={book.title} />
                </ImgContainerFav>
                <DescriptionContainerFav>
                  <h2>{`Author: ${book.author}`}</h2>
                  <h3>{`Publisher: ${book.publisher}`}</h3>
                  <h3>{`Published: ${book.published}`}</h3>
                  <p>{`Description: ${book.description}`}</p>
                </DescriptionContainerFav>
                <RemoveFromFavButtonContainer>
                  <button onClick={() => removeFromLocalStorage(book.title)}>
                    Remove from favorites
                  </button>
                </RemoveFromFavButtonContainer>
              </BookCard>
            );
          })}
        </BookCardsContainer>
      </RedCardContainerFavorites>
      <AllFooter>Footer</AllFooter>
    </WhiteCardContainer>
  );
};

export default FavoritesPage;
