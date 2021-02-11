import { handlingSearch } from "./actions";

export const handlingSearchThunk = (data) => {
  return (dispatch, getState) => {
    const infoBooks = {
      // dados do livro
    };
    dispatch(handlingSearch(infoBooks));
  };
};
