import { handlingSearch } from "./actions";

export const handlingSearchThunk = (data) => {
  // requisição com axios

  return (dispatch, getState) => {
    dispatch(handlingSearch(data));
  };
};
