import { BookCardsContainer } from "../BookCardsContainer/styled";
import {
  BookCard,
  BookImage,
  ImageBookContainer,
  InfoBookContainer,
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getDescriptionsThunk } from "../../../store/modules/DescriptionBook/thunks";
import { useEffect } from "react";

const BookInfo = ({ Books }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  // Books sao os dados recebidos pelo state global
  //adicionar state global
  const searched = useSelector((state) => state.infoBooks);
  console.log("Books Data: ", searched); //Retirar

  return (
    <BookCardsContainer>
      {searched.length > 0 ? (
        searched.map((book, index) => {
          return (
            <BookCard
              onClick={() => {
                document.body.style.cursor = "wait";
                dispatch(getDescriptionsThunk(book));
                setTimeout(() => history.push("/description"), 1500);
              }}
              key={index}
            >
              <ImageBookContainer>
                {book.image !== " " ? (
                  <img src={book.image} alt={book.title} />
                ) : (
                  <BookImage
                    src="https://i.postimg.cc/Tw1hZH1f/pngegg-4.png"
                    alt={book.title}
                  />
                )}
              </ImageBookContainer>
              <InfoBookContainer>
                <h1>{book.title}</h1>
                {book.author !== " " ? (
                  <h2>{`Author: ${book.author}`}</h2>
                ) : (
                  <h2>{`Author: Not inserted`}</h2>
                )}
                {book.publisher !== " " ? (
                  <p>{`Publisher: ${book.publisher}`}</p>
                ) : (
                  <p>{`Publisher: Not inserted`}</p>
                )}
                {book.published !== " " ? (
                  <p>{`Published: ${book.published}`}</p>
                ) : (
                  <p>{`Published: Not inserted`}</p>
                )}
              </InfoBookContainer>
            </BookCard>
          );
        })
      ) : (
        <h1 style={{ color: "white" }}>Loading . . </h1>
      )}
    </BookCardsContainer>
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
    title: "A Sutil Arte de Ligar o F*da-Se",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/415CNU3HDyL._SX332_BO1,204,203,200_.jpg",
    author: "Mark Manson ",
    publisher: "Intrínseca",
    published: "6 novembro 2017",
    description:
      "Chega de tentar buscar um sucesso que só existe na sua cabeça. Chega de se torturar para pensar positivo enquanto sua vida vai ladeira abaixo. Chega de se sentir inferior por não ver o lado bom de estar no fundo do poço.Coaching, autoajuda, desenvolvimento pessoal, mentalização positiva - sem querer desprezar o valor de nada disso, a grande verdade é que às vezes nos sentimos quase sufocados diante da pressão infinita por parecermos otimistas o tempo todo. É um pecado social se deixar abater quando as coisas não vão bem. Ninguém pode fracassar simplesmente, sem aprender nada com isso. Não dá mais. É insuportável. E é aí que entra a revolucionária e sutil arte de ligar o foda-se.",
  },
  {
    title: "O poder do hábito",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51VFNJGBvqL._SX346_BO1,204,203,200_.jpg",
    author: "Charles Duhigg ",
    publisher: "Objetiva",
    published: "24 setembro 2012",
    description:
      "Durante os últimos dois anos, uma jovem transformou quase todos os aspectos de sua vida. Parou de fumar, correu uma maratona e foi promovida. Em um laboratório, neurologistas descobriram que os padrões dentro do cérebro dela mudaram de maneira fundamental. Publicitários da Procter & Gamble observaram vídeos de pessoas fazendo a cama. Tentavam desesperadamente descobrir como vender um novo produto chamado Febreze, que estava prestes a se tornar um dos maiores fracassos na história da empresa. De repente, um deles detecta um padrão quase imperceptível - e, com uma sutil mudança na campanha publicitária, Febreze começa a vender um bilhão de dólares por anos. Um diretor executivo pouco conhecido assume uma das maiores empresas norte-americanas. Seu primeiro passo é atacar um único padrão entre os funcionários - a maneira como lidam com a segurança no ambiente de trabalho -, e logo a empresa começa a ter o melhor desempenho no índice Dow Jones. O que todas essas pessoas tem em comum? Conseguiram ter sucesso focando em padrões que moldam cada aspecto de nossas vidas. Tiveram êxito transformando hábitos. Com perspicácia e habilidade, Charles Duhigg apresenta um novo entendimento da natureza humana e seu potencial para a transformação.",
  },
];
