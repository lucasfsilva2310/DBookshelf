import styled from "styled-components";

export const BookCardsContainer = styled.div`
  width: 98%;
  height: 98%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  overflow-y: auto;
`;

export const BookCard = styled.div`
  background: #f2f2fc;
  border-radius: 25px;
  width: 40%;
  height: 80%;
  margin: 2%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const ImgContainerFav = styled.div`
  width: 80%;
  height: 39%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 35%;
    height: 90%;
  }
`;

export const TitleContainerFav = styled.div`
  width: 90%;
  height: 9%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  h1 {
    font-size: 1.4rem;
    font-family: "Roboto", sans-serif;
  }
`;

export const DescriptionContainerFav = styled.div`
  border: 1px solid grey;
  border-radius: 15px;
  width: 90%;
  height: 34%;
  margin: 1% auto;
  overflow: auto;
  font-family: "Roboto", sans-serif;
  h2 {
    font-size: 1.25rem;
    margin-left: 5%;
  }
  h3 {
    margin-top: 1%;
    font-size: 1rem;
    margin-left: 5%;
  }
  p {
    font-size: 1.1rem;
    margin-left: 4%;
    line-height: 1.2;
    margin-top: 2%;
  }
  @media only screen and (max-width: 875px) {
    height: 28%;
  }
`;

export const RemoveFromFavButtonContainer = styled.div`
  width: 96%;
  height: 10%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    background: #fc5247;
    border-radius: 25px;
    width: 23vw;
    height: 4vh;
    border: none;
    font-size: 1.5rem;
    outline: none;
    transition: background 0.5s;
  }
  button:focus {
    background: #bc1207;
  }
  @media only screen and (max-width: 1110px) {
    margin: 2% auto;
    button {
      height: 6vh;
      width: 18vw;
    }
  }
  @media only screen and (max-width: 875px) {
    button {
      font-size: 1.2rem;
      margin-top: 17%;
      height: 9vh;
      width: 18vw;
    }
  }
`;
