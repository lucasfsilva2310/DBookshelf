import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/index";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact to="/">
          <HomePage />
        </Route>
        <Route exact to="/search"></Route>
        <Route exact to="/description"></Route>
        <Route exact to="/favorites"></Route>
      </Switch>
    </>
  );
};

export default Routes;
