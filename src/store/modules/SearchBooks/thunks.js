import { handlingSearch } from "./actions";
import axios from "axios";

export const handlingSearchThunk = (data) => {
  // requisição com axios
  const booksData = [];

  const GOOGLE_KEY = ''
  
  axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=${data}&key=${GOOGLE_KEY}`
    )
    .then((response) => {
      if (response.data.items.length < 10) {
        console.log(response);
        for (let i = 0; i < response.data.items.length; i++) {
          console.log(response.data.items[i]);
          const book = {
            title:
              response.data.items[i].volumeInfo.title !== undefined
                ? response.data.items[i].volumeInfo.title
                : " ",
            author:
              response.data.items[i].volumeInfo.authors !== undefined
                ? response.data.items[i].volumeInfo.authors
                : " ",
            publisher:
              response.data.items[i].volumeInfo.publisher !== undefined
                ? response.data.items[i].volumeInfo.publisher
                : " ",
            published:
              response.data.items[i].volumeInfo.publishedDate !== undefined
                ? response.data.items[i].volumeInfo.publishedDate
                : " ",
            description:
              response.data.items[i].volumeInfo.description !== undefined
                ? response.data.items[i].volumeInfo.description
                : " ",
            image:
              response.data.items[i].volumeInfo.imageLinks !== undefined
                ? response.data.items[i].volumeInfo.imageLinks.thumbnail
                : " ",
          };
          booksData.push(book);
        }
      }
      console.log(response);
      for (let i = 0; i < 10; i++) {
        console.log(response.data.items[i]);
        const book = {
          title:
            response.data.items[i].volumeInfo.title !== undefined
              ? response.data.items[i].volumeInfo.title
              : " ",
          author:
            response.data.items[i].volumeInfo.authors !== undefined
              ? response.data.items[i].volumeInfo.authors
              : " ",
          publisher:
            response.data.items[i].volumeInfo.publisher !== undefined
              ? response.data.items[i].volumeInfo.publisher
              : " ",
          published:
            response.data.items[i].volumeInfo.publishedDate !== undefined
              ? response.data.items[i].volumeInfo.publishedDate
              : " ",
          description:
            response.data.items[i].volumeInfo.description !== undefined
              ? response.data.items[i].volumeInfo.description
              : " ",
          image:
            response.data.items[i].volumeInfo.imageLinks !== undefined
              ? response.data.items[i].volumeInfo.imageLinks.thumbnail
              : " ",
        };

        booksData.push(book);
        console.log(response);
      }
    });
  return (dispatch, getState) => {
    dispatch(handlingSearch(booksData));
  };
};
