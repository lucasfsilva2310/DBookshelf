import "./reset.css";
import { RootContainer } from "./styles/RootContainer.js";
import { WhiteCardContainer } from "./styles/WhiteCardContainer.js";
import { RedCardContainer } from "./styles/RedCardContainer";
import { AllFooter } from "./styles/AllFooter";
import { AllHeader } from "./styles/AllHeader";
import { TitleContainer } from "./components/DbookshelfTitle/styledTitle";
import { NavBarContainer } from "./components/NavigationBar/styledNav";
import { LoginContainer } from "./components/LoginButton/styledButton";
import { MainDescriptionContainer } from "./pages/HomePage/MainDescription/styled";
import { SecondDescriptionContainer } from "./pages/HomePage/SecondDescription/styled";
import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <RootContainer>
      <WhiteCardContainer>
        <AllHeader>
          <TitleContainer>
            <img
              src="https://i.postimg.cc/vZ53XpfY/title.png"
              alt="Title"
            ></img>
            <h3>DBookShelf</h3>
          </TitleContainer>
          <NavBarContainer>
            <Link exact to="/home">
              Home
            </Link>
            <Link exact to="/favorites">
              Favorites
            </Link>
          </NavBarContainer>
          <LoginContainer>
            <button>Login</button>
          </LoginContainer>
        </AllHeader>

        <RedCardContainer className="onlyBackGround">
          <MainDescriptionContainer>
            <h1>Your favorite app to save your favorite books.</h1>
          </MainDescriptionContainer>
          <SecondDescriptionContainer>
            <h2>
              With this app you can search for, save inside your favorites list
              and mark as read your favorite books. The best app for book lovers
              like you!
            </h2>
          </SecondDescriptionContainer>
        </RedCardContainer>
        <AllFooter>Footer</AllFooter>
      </WhiteCardContainer>
    </RootContainer>
  );
}

export default App;
