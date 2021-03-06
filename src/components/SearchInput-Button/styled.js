import styled from "styled-components";

export const InputDiv = styled.div`
  background: #f7f7ff;
  border-radius: 25px;
  width: 32vw;
  height: 8vh;
  margin: 5vh 0 0 1vw;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    background: #f7f7ff;
    outline: none;
    height: 80%;
    width: 80%;
    border: 0;
    border-radius: 25px;
    font-size: 0.9rem;
  }
  button {
    background: #fc5247;
    border-radius: 25px;
    width: 10vw;
    height: 4vh;
    margin-right: 1vw;
    font-size: 1.5rem;
    border: none;
    transition: background 0.5s;
    outline: none;
  }
  button:focus {
    background: #bc1207;
  }
  @media only screen and (max-width: 1275px) {
    input {
      font-size: 0.8rem;
    }
  }
  @media only screen and (max-width: 1140px) {
    input {
      font-size: 0.75rem;
    }
  }
  @media only screen and (max-width: 900px) {
    button {
      font-size: 1rem;
    }
  }
`;
