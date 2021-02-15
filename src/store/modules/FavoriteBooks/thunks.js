import { addToFavorites, removeFromFavorites, getFavorites } from "./actions";

export const addToFavoritesThunk = (book) => (dispatch, getState) => {
  const favorites = JSON.parse(localStorage.getItem("books")) || [];
  favorites.push(book);
  localStorage.setItem("books", JSON.stringify(favorites));
  dispatch(addToFavorites(favorites));
};

export const removeFromFavoritesThunk = (bookRemoved) => (
  dispatch,
  getState
) => {
  const favorites = JSON.parse(localStorage.getItem("books")) || [];
  const filtered = favorites.filter(
    (bookFav) => bookFav.title !== bookRemoved.title
  );
  localStorage.setItem("books", JSON.stringify(filtered));
  dispatch(removeFromFavorites(filtered));
};

export const getFavoritesThunk = (list) => (dispatch, getState) => {
  const favorites = JSON.parse(localStorage.getItem("books")) || [];
  dispatch(getFavorites(favorites));
};
