import styled from "styled-components";

export const TitleContainer = styled.div`
  width: 25%;
  margin-left: 1vw;
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-size: 2rem;
  }

  @media only screen and (max-width: 1632px) {
    margin-left: 2vw;
  }
  @media only screen and (max-width: 1427px) {
    margin-left: 3vw;
  }
  @media only screen and (max-width: 1632px) {
    margin-left: 4vw;
    h3 {
      font-size: 1.8rem;
    }
  }
  @media only screen and (max-width: 1051px) {
    margin-left: 3.3vw;
    h3 {
      font-size: 1.4rem;
    }
  }
  @media only screen and (max-width: 829px) {
    margin-left: 7vw;
    img {
      width: 50%;
    }
    h3 {
      font-size: 1.2rem;
    }
  }
  @media only screen and (max-width: 590px) {
    /* margin-left: 8vw; */
    h3 {
      font-size: 0.8rem;
    }
  }
`;
