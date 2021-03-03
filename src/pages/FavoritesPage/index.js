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
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  removeFromFavoritesThunk,
  getFavoritesThunk,
} from "../../store/modules/FavoriteBooks/thunks";

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favoriteBooks = useSelector((state) => state.favoriteList) || [];
  console.log("localstorage: ", favoriteBooks);

  useEffect(() => {
    dispatch(getFavoritesThunk(JSON.parse(localStorage.getItem("books"))));
  }, []);
  const removeFromLocalStorage = (bookRemoved) => {
    dispatch(removeFromFavoritesThunk(bookRemoved));
  };
  return (
    <WhiteCardContainer>
      <AllHeader>
        <DbookTitle />
        <NavigationBar />
      </AllHeader>
      <RedCardContainerFavorites>
        <BookCardsContainer>
          {favoriteBooks.map((book, index) => {
            return (
              <BookCard>
                <TitleContainerFav>
                  <h1>{book.title}</h1>
                </TitleContainerFav>
                <ImgContainerFav>
                  <img src={book.image} alt={book.title} />
                </ImgContainerFav>
                <DescriptionContainerFav>
                  <h2>{`Author:   ${book.author}`}</h2>
                  <h3>{`Publisher:  ${book.publisher}`}</h3>
                  <h3>{`Published:  ${book.published}`}</h3>
                  <p>{`Description:  ${book.description}`}</p>
                </DescriptionContainerFav>
                <RemoveFromFavButtonContainer>
                  <button onClick={() => removeFromLocalStorage(book)}>
                    Remove from favorites
                  </button>
                </RemoveFromFavButtonContainer>
              </BookCard>
            );
          })}
        </BookCardsContainer>
      </RedCardContainerFavorites>
      <AllFooter></AllFooter>
    </WhiteCardContainer>
  );
};

export default FavoritesPage;
