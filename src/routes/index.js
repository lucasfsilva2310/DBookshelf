import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/index";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/search"></Route>
        <Route exact path="/description"></Route>
        <Route exact path="/favorites"></Route>
      </Switch>
    </>
  );
};

export default Routes;
