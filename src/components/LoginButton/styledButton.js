import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 25%;
  margin-right: 3vw;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    background: #fc5247;
    border-radius: 25px;
    width: 10vw;
    height: 4vh;
    border: none;
    font-size: 1.5rem;
    /* outline: none; retirar borda */
  }
  @media only screen and (max-width: 680px) {
    button {
      font-size: 1.1rem;
    }
  }
`;
