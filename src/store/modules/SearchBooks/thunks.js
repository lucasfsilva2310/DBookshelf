import { handlingSearch } from "./actions";
import axios from "axios";

export const handlingSearchThunk = (data) => {
  // requisição com axios
  const booksData = [];

  axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=${data}&key=AIzaSyCFB_08BtB6MCSLqdEGhpy2yR73QAxjdCg`
    )
    .then((response) => {
      if (response.data.items.length < 10) {
        for (let i = 0; i < response.data.items.length; i++) {
          const book = {
            title: response.data.items[i].volumeInfo.title,
            author: response.data.items[i].volumeInfo.authors[0],
            publisher: response.data.items[i].volumeInfo.publisher,
            published: response.data.items[i].volumeInfo.publishedDate,
            description: response.data.items[i].volumeInfo.description,
            image: response.data.items[i].volumeInfo.imageLinks.thumbnail,
          };
          console.log(response.data.items[i].volumeInfo.title);
          booksData.push(book);

          console.log(response);
        }
      }
      for (let i = 0; i < 10; i++) {
        const book = {
          title: response.data.items[i].volumeInfo.title,
          author: response.data.items[i].volumeInfo.authors[0],
          publisher: response.data.items[i].volumeInfo.publisher,
          published: response.data.items[i].volumeInfo.publishedDate,
          description: response.data.items[i].volumeInfo.description,
          image:
            response.data.items[i].volumeInfo.imageLinks !== undefined
              ? response.data.items[i].volumeInfo.imageLinks.thumbnail
              : " ",
        };
        console.log(response.data.items[i].volumeInfo.title);

        booksData.push(book);
        console.log(response);
      }
    });
  return (dispatch, getState) => {
    dispatch(handlingSearch(booksData));
  };
};
