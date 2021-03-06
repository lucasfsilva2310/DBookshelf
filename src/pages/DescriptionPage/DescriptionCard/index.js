import {
  DescriptionCardContainer,
  ImgContainer,
  BookDescriptionContainer,
  FavoritesButtonContainer,
} from "./styled";

import {
  addToFavoritesThunk,
  getFavoritesThunk,
} from "../../../store/modules/FavoriteBooks/thunks";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";

const CardDescriptionPage = ({ book }) => {
  const dispatch = useDispatch();
  const [checkFav, setCheckFav] = useState(false);
  const [favAdded, setFavAdded] = useState(false);

  const alreadyInFav = useSelector((state) => state.favoriteList);

  const toLocalStorage = (newBook) => {
    const searchInFav = alreadyInFav.find(
      (bookFav) => bookFav.title === book.title
    );
    if (searchInFav !== undefined) {
      setCheckFav(true);

      return;
    }
    dispatch(addToFavoritesThunk(newBook));
    setFavAdded(true);
  };

  useEffect(() => {
    dispatch(getFavoritesThunk(JSON.parse(localStorage.getItem("books"))));
    setCheckFav(false);
    setFavAdded(false);
  }, []);

  return (
    <DescriptionCardContainer>
      <ImgContainer>
        <img src={book.image} alt={book.title} />
      </ImgContainer>
      <BookDescriptionContainer>
        <h1>{book.title}</h1>
        {book.author !== " " ? (
          <h2>{`Author: ${book.author}`}</h2>
        ) : (
          <h2>{`Author: Not inserted`}</h2>
        )}
        {book.publisher !== " " ? (
          <p>{`Publisher: ${book.publisher}`}</p>
        ) : (
          <p>{`Publisher: Not inserted`}</p>
        )}
        {book.published !== " " ? (
          <p>{`Published: ${book.published}`}</p>
        ) : (
          <p>{`Published: Not inserted`}</p>
        )}
        {book.description !== " " ? (
          <p>{`Description: ${book.description}`}</p>
        ) : (
          <p>{`Description: Not inserted`}</p>
        )}
      </BookDescriptionContainer>
      <FavoritesButtonContainer>
        <button onClick={() => toLocalStorage(book)}>Add to Favorites!</button>
        {checkFav && <p>It is already added to the favorite list!</p>}
        {favAdded && <p>Book added to your favorite list!</p>}
      </FavoritesButtonContainer>
    </DescriptionCardContainer>
  );
};

export default CardDescriptionPage;
