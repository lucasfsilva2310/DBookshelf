import { handlingSearch } from "./actions";

export const handlingSearchThunk = (data) => {
  // requisição com axios
  const infoBooks = {
    // dados do livro
  };
  return (dispatch, getState) => {
    dispatch(handlingSearch(infoBooks));
  };
};
