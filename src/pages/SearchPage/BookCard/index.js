import { BookCardContainer } from "../BookCardsContainer/styled";
import { BookCard, ImageBookContainer, InfoBookContainer } from "./styled";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getDescriptionsThunk } from "../../../store/modules/DescriptionBook/thunks";

const BookInfo = ({ Books }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  // Books sao os dados recebidos pelo state global
  //adicionar state global

  return (
    <BookCardContainer>
      {BookTest.map((book, index) => {
        return (
          <BookCard
            onClick={() => {
              console.log("dados livro: ", book);
              dispatch(getDescriptionsThunk(book));
              setTimeout(() => history.push("/description"), 1500);
            }}
            key={index}
          >
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
    description:
      "A estelar equipe criativa composta pelo roteirista Tom King e o desenhista Andy Kubert respondem à questão: quão longe o Superman iria para trazer uma única criança para casa? Alienígenas sequestraram uma menina em Metrópolis, e a cada parada no caminho, o Homem de Aço enfrenta novos mistérios e desafios. Quanto mais ele se aproxima, mais distante parece estar de resgatar a garotinha. E quem protege Metrópolis em sua ausência? (Superman: Up In The Sky 1-6)",
  },
  {
    title: "Harry Potter - A Coleção Completa",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/61p1DfZTTAL._AC_SL1000_.jpg",
    author: "David Yates",
    publisher: "Daniel Radcliffe",
    published: "10 julho 2020",
    description:
      "A estelar equipe criativa composta pelo roteirista Tom King e o desenhista Andy Kubert respondem à questão: quão longe o Superman iria para trazer uma única criança para casa? Alienígenas sequestraram uma menina em Metrópolis, e a cada parada no caminho, o Homem de Aço enfrenta novos mistérios e desafios. Quanto mais ele se aproxima, mais distante parece estar de resgatar a garotinha. E quem protege Metrópolis em sua ausência? (Superman: Up In The Sky 1-6)",
  },
  {
    title: "Harry Potter - A Coleção Completa",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/61p1DfZTTAL._AC_SL1000_.jpg",
    author: "David Yates",
    publisher: "Daniel Radcliffe",
    published: "10 julho 2020",
    description:
      "A estelar equipe criativa composta pelo roteirista Tom King e o desenhista Andy Kubert respondem à questão: quão longe o Superman iria para trazer uma única criança para casa? Alienígenas sequestraram uma menina em Metrópolis, e a cada parada no caminho, o Homem de Aço enfrenta novos mistérios e desafios. Quanto mais ele se aproxima, mais distante parece estar de resgatar a garotinha. E quem protege Metrópolis em sua ausência? (Superman: Up In The Sky 1-6)",
  },
];
