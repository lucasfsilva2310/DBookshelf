import styled from "styled-components";

export const RedCardContainer = styled.div`
  background: #fc5247;
  background-image: url("https://i.postimg.cc/MGTNm01L/homepageback.png"); //
  background-repeat: no-repeat; //  BackGround Image, trocar em cada pagina
  background-size: 60% 100%;
  background-position: 100%;
  background-clip: border-box;
  border-radius: 25px;
  width: 75vw;
  height: 65vh;
  margin: 0 auto 0 auto;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 1240px) {
    margin: 1% auto 0 auto;
  }

  @media only screen and (max-width: 1038px) {
    margin: 1% auto 0 auto;
  }

  @media only screen and (max-width: 887px) {
    margin: 1% auto 0 auto;
  }
  @media only screen and (max-width: 887px) {
    background-size: 70% 100%;
  }
`;
