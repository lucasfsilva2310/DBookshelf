import { NavBarContainer } from "./styledNav";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <>
      <NavBarContainer>
        <Link exact to="/home">
          Home
        </Link>
        <Link exact to="/favorites">
          Favorites
        </Link>
      </NavBarContainer>
    </>
  );
};

export default NavigationBar;
