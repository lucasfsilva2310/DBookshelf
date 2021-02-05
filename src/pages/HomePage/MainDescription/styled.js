import styled from "styled-components";

export const MainDescriptionContainer = styled.div`
  width: 35vw;
  height: 25vh;
  margin: 14vh auto 0 0;
  h1 {
    font-size: 3.5rem;
  }
  @media only screen and (max-width: 1058px) {
    h1 {
      font-size: 3rem;
    }
  }
  @media only screen and (max-width: 851px) {
    h1 {
      font-size: 2.8rem;
    }
  }
  @media only screen and (max-width: 685px) {
    h1 {
      font-size: 2.4rem;
    }
    @media only screen and (max-width: 547px) {
      h1 {
        font-size: 2.2rem;
      }
    }
  }
`;
