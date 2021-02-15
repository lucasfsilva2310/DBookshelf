const favoritesReducer = (
  state = JSON.parse(localStorage.getItem("book"))
    ? JSON.parse(localStorage.getItem("books"))
    : [],
  action
) => {
  switch (action.type) {
    case "ADD_BOOK":
      return action.list;

    case "REMOVE_BOOK":
      return action.newList;

    case "GET_LIST":
      return action.list;

    default:
      return state;
  }
};

export default favoritesReducer;
