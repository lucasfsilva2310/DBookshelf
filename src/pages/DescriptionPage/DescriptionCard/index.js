import {
  DescriptionCardContainer,
  ImgContainer,
  BookDescriptionContainer,
  FavoritesButtonContainer,
} from "./styled";

const CardDescriptionPage = ({ book }) => {
  const toLocalStorage = (newBook) => {
    if (localStorage.getItem("books") !== null) {
      let alreadyFav = JSON.parse(localStorage.getItem("books"));
      alreadyFav.push(book);
      localStorage.setItem("books", JSON.stringify(alreadyFav));
      return;
    }
    let startingSequence = [];
    startingSequence.push(book);
    localStorage.setItem("books", JSON.stringify(startingSequence));
  };

  return (
    <DescriptionCardContainer>
      <ImgContainer>
        <img src={book.img} alt={book.title} />
      </ImgContainer>
      <BookDescriptionContainer>
        <h1>{book.title}</h1>
        <h2>{`Author: ${book.author}`}</h2>
        <h3>{`Publisher: ${book.publisher}`}</h3>
        <h3>{`Published: ${book.published}`}</h3>
        <p>{`Description: ${book.description}`}</p>
      </BookDescriptionContainer>
      <FavoritesButtonContainer>
        <button onClick={() => toLocalStorage(book)}>Add to Favorites!</button>
      </FavoritesButtonContainer>
    </DescriptionCardContainer>
  );
};

export default CardDescriptionPage;
