import { BookCardContainer } from "../BookCardsContainer/styled";
import { BookCard, ImageBookContainer, InfoBookContainer } from "./styled";

const BookInfo = ({ Books }) => {
  // Books sao os dados recebidos pelo state global

  return (
    <BookCardContainer>
      {/* Inserir Map de livros aqui */}
      {/* Card Exemplo:
        <BookCard>
        <ImageBookContainer>
          <img
            src="https://i.postimg.cc/0j8WH9Z8/pngegg-4.png"
            alt="book cape"
          />
        </ImageBookContainer>
        <InfoBookContainer>
          <h1>Title</h1>
          <h2>Author: author</h2>
          <p>Publisher: Publisher</p>
          <p>Published: d-a-t-e</p>
        </InfoBookContainer>
      </BookCard>
      */}
      <BookCard>
        <ImageBookContainer>
          <img
            src="https://i.postimg.cc/0j8WH9Z8/pngegg-4.png"
            alt="book cape"
          />
        </ImageBookContainer>
        <InfoBookContainer>
          <h1>Title</h1>
          <h2>Author: author</h2>
          <p>Publisher: Publisher</p>
          <p>Published: d-a-t-e</p>
        </InfoBookContainer>
      </BookCard>
      <BookCard>
        <ImageBookContainer>
          <img
            src="https://i.postimg.cc/0j8WH9Z8/pngegg-4.png"
            alt="book cape"
          />
        </ImageBookContainer>
        <InfoBookContainer>
          <h1>Title</h1>
          <h2>Author: author</h2>
          <p>Publisher: Publisher</p>
          <p>Published: d-a-t-e</p>
        </InfoBookContainer>
      </BookCard>
      <BookCard>
        <ImageBookContainer>
          <img
            src="https://i.postimg.cc/0j8WH9Z8/pngegg-4.png"
            alt="book cape"
          />
        </ImageBookContainer>
        <InfoBookContainer>
          <h1>Title</h1>
          <h2>Author: author</h2>
          <p>Publisher: Publisher</p>
          <p>Published: d-a-t-e</p>
        </InfoBookContainer>
      </BookCard>
      <BookCard>
        <ImageBookContainer>
          <img
            src="https://i.postimg.cc/0j8WH9Z8/pngegg-4.png"
            alt="book cape"
          />
        </ImageBookContainer>
        <InfoBookContainer>
          <h1>Title</h1>
          <h2>Author: author</h2>
          <p>Publisher: Publisher</p>
          <p>Published: d-a-t-e</p>
        </InfoBookContainer>
      </BookCard>
      <BookCard>
        <ImageBookContainer>
          <img
            src="https://i.postimg.cc/0j8WH9Z8/pngegg-4.png"
            alt="book cape"
          />
        </ImageBookContainer>
        <InfoBookContainer>
          <h1>Title</h1>
          <h2>Author: author</h2>
          <p>Publisher: Publisher</p>
          <p>Published: d-a-t-e</p>
        </InfoBookContainer>
      </BookCard>
    </BookCardContainer>
  );
};

export default BookInfo;
