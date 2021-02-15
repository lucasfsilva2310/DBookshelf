export const addToFavorites = (list) => ({
  type: "ADD_BOOK",
  list,
});

export const removeFromFavorites = (newList) => ({
  type: "REMOVE_BOOK",
  newList,
});

export const getFavorites = (list) => ({
  type: "GET_LIST",
  list,
});
