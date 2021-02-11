import styled from "styled-components";

export const RegisterDiv = styled.div`
  width: 28vw;
  height: 8vh;
  margin: 4vh 0 0 10vw;
  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 1.8rem;
  }
  button {
    background: #f7f7ff;
    border-radius: 25px;
    width: 10vw;
    height: 4vh;
    margin-left: 1vw;
    font-size: 1.8rem;
    border: none;
    /* outline: none; retirar borda */
  }
  @media only screen and (max-width: 1475px) {
    h3 {
      font-size: 1.6rem;
    }
  }
  @media only screen and (max-width: 1310px) {
    h3 {
      font-size: 1.4rem;
    }
    button {
      font-size: 1.6rem;
    }
  }
  @media only screen and (max-width: 1150px) {
    h3 {
      font-size: 1.3rem;
    }
    button {
      font-size: 1.4rem;
    }
  }
  @media only screen and (max-width: 1070px) {
    h3 {
      font-size: 1.2rem;
    }
    button {
      font-size: 1.3rem;
    }
  }
  @media only screen and (max-width: 980px) {
    h3 {
      font-size: 1.1rem;
    }
    button {
      font-size: 1.2rem;
    }
  }
  @media only screen and (max-width: 895px) {
    button {
      font-size: 0.9rem;
    }
  }
  @media only screen and (max-width: 635px) {
    button {
      font-size: 0.65rem;
    }
  }
`;
