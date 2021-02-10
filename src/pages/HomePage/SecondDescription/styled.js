import styled from "styled-components";

export const SecondDescriptionContainer = styled.div`
  width: 28vw;
  height: 10vh;
  margin: 0 auto 0 1vw;
  h2 {
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 1420px) {
    h2 {
      font-size: 1.3rem;
    }
  }
  @media only screen and (max-width: 1105px) {
    width: 32vw;
  }
  @media only screen and (max-width: 960px) {
    width: 35vw;
  }
  @media only screen and (max-width: 870px) {
    width: 37vw;
  }
  @media only screen and (max-width: 870px) {
    width: 39vw;
  }
  @media only screen and (max-width: 790px) {
    h2 {
      font-size: 1.2rem;
    }
  }
  @media only screen and (max-width: 585px) {
    h2 {
      font-size: 1.1rem;
    }
  }
  @media only screen and (max-width: 535px) {
    h2 {
      font-size: 0px;
    }
    h2:before,
    h2:after {
      font-size: 1.1rem;
      content: "The best app for book lovers like you!";
    }
  }
`;
