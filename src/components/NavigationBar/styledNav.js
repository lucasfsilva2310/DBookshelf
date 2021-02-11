import styled from "styled-components";

export const NavBarContainer = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2vh;
  a {
    text-decoration: none;
    color: black;
    font-size: 1.4rem;
  }
  @media only screen and (max-width: 750px) {
    a {
      font-size: 1.2rem;
    }
  } ;
`;
