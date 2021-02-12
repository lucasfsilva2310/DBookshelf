import styled from "styled-components";

export const RedCardContainerDescription = styled.div`
  background: #fc5247;
  background-image: url("https://i.postimg.cc/Hn8L0cSr/descriptionpage.png"); //
  background-repeat: repeat; //  BackGround Image, trocar em cada pagina
  background-size: 50% 90%;
  background-position: 50% 130%;
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
`;
