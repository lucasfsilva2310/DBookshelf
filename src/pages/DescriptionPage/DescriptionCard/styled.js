import styled from "styled-components";

export const DescriptionCardContainer = styled.div`
  background: #f2f2fc;
  border-radius: 25px;
  width: 80%;
  height: 70%;
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-y: auto;
  justify-content: center;
`;

export const ImgContainer = styled.div`
  width: 35%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 70%;
    height: 70%;
  }
`;

export const BookDescriptionContainer = styled.div`
  width: 53%;
  height: 80%;
  word-break: break-all;
  display: flex;
  flex-direction: column;
  line-height: 1.4;
  align-items: center;
  h1 {
    margin-top: 4%;
    font-size: 1.6rem;
    margin-left: 5%;
  }
  h2 {
    font-size: 1.25rem;
    margin-left: 5%;
  }
  h3 {
    font-size: 1rem;
    margin-left: 5%;
  }
  p {
    font-size: 1.1rem;
    margin-left: 4%;
    line-height: 1.2;
    margin-top: 2%;
  }
`;

export const FavoritesButtonContainer = styled.div`
  width: 98%;
  height: 18%;
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
    /* outline: none; retirar borda */
  }
  @media only screen and (max-width: 1200px) {
    justify-content: flex-start;
  }
  @media only screen and (max-width: 865px) {
    button {
      width: 20vw;
      height: 6vh;
    }
  }
  @media only screen and (max-width: 865px) {
    button {
      font-size: 1.2rem;
    }
  }
`;
