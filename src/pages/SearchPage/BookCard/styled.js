import styled from "styled-components";

export const BookCard = styled.div`
  background: #f2f2fc;
  border-radius: 25px;
  width: 35%;
  height: 45%;
  margin: 3%;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  word-break: break-all; //quebrar linha dos caracteres
  cursor: pointer;
`;

export const ImageBookContainer = styled.div`
  width: 35%;
  margin-left: 5%;
  height: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 70%;
    height: 70%;
  }
`;

export const InfoBookContainer = styled.div`
  width: 55%;
  margin-right: 5%;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;

  h1 {
    font-size: 1.5rem;
    margin-left: 5%;
  }
  h2 {
    font-size: 1.2rem;
    margin-left: 5%;
  }

  p {
    font-size: 1rem;
    margin-left: 5%;
  }
`;
