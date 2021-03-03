import { getDescriptions } from "./actions";

export const getDescriptionsThunk = (data) => {
  const descriptionBook = {
    // dados do livro
    title: data.title,
    author: data.author,
    publisher: data.publisher,
    published: data.published,
    description: data.description,
    image: data.image,
  };
  return (dispatch, getState) => {
    dispatch(getDescriptions(descriptionBook));
  };
};
