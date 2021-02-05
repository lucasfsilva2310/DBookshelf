import { Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact to="/"></Route>
        <Route exact to="/search"></Route>
        <Route exact to="/description"></Route>
        <Route exact to="/favorites"></Route>
      </Switch>
    </>
  );
};

export default Routes;
