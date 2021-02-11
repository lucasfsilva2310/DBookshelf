import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/index";
import SearchPage from "../pages/SearchPage/index";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/search">
          <SearchPage />
        </Route>
        <Route exact path="/description">
          Description
        </Route>
        <Route exact path="/favorites">
          Favorites
        </Route>
        <Route exact path="/register">
          Register
        </Route>
        <Route exact path="/login">
          Login
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
