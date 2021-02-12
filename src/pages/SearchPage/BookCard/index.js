import { BookCardContainer } from "../BookCardsContainer/styled";
import { BookCard, ImageBookContainer, InfoBookContainer } from "./styled";

const BookInfo = ({ Books }) => {
  // Books sao os dados recebidos pelo state global
  //adicionar state global

  return (
    <BookCardContainer>
      {BookTest.map((book, index) => {
        return (
          <BookCard>
            <ImageBookContainer>
              <img src={book.img} alt="book cape" />
            </ImageBookContainer>
            <InfoBookContainer>
              <h1>{book.title}</h1>
              <h2>{`Author: ${book.author}`}</h2>
              <p>{`Publisher: ${book.publisher}`}</p>
              <p>{`Published: ${book.published}`}</p>
            </InfoBookContainer>
          </BookCard>
        );
      })}
    </BookCardContainer>
  );
};

export default BookInfo;

const BookTest = [
  {
    title: "Harry Potter - A Coleção Completa",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/61p1DfZTTAL._AC_SL1000_.jpg",
    author: "David Yates",
    publisher: "Daniel Radcliffe",
    published: "10 julho 2020",
  },
  {
    title: "Harry Potter - A Coleção Completa",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/61p1DfZTTAL._AC_SL1000_.jpg",
    author: "David Yates",
    publisher: "Daniel Radcliffe",
    published: "10 julho 2020",
  },
  {
    title: "Harry Potter - A Coleção Completa",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/61p1DfZTTAL._AC_SL1000_.jpg",
    author: "David Yates",
    publisher: "Daniel Radcliffe",
    published: "10 julho 2020",
  },
];
