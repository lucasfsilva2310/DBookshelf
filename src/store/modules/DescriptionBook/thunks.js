import { getDescriptions } from "./actions";

export const getDescriptionsThunk = (data) => {
  const descriptionBook = {
    // dados do livro
    title: data.title,
    author: data.author,
    publisher: data.publisher,
    published: data.published,
    description: data.description,
    img: data.img,
  };
  console.log("Thunk: ", descriptionBook); //Retirar
  return (dispatch, getState) => {
    dispatch(getDescriptions(descriptionBook));
  };
};
