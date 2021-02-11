const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case "SEARCHING_FOR":
      const { infoBooks } = action;
      return infoBooks;

    default:
      return state;
  }
};

export default searchReducer;
