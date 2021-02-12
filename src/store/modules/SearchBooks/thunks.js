import { handlingSearch } from "./actions";

export const handlingSearchThunk = (data) => {
  // requisição com axios
  const infoBooks = {
    // dados do livro
    title: "",
    author: "",
    publisher: "",
    published: "",
    description: "",
  };
  return (dispatch, getState) => {
    dispatch(handlingSearch(infoBooks));
  };
};
