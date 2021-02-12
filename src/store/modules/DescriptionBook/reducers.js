const descriptionReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_INFO":
      const { descriptionBook } = action;
      return descriptionBook;

    default:
      return state;
  }
};

export default descriptionReducer;
