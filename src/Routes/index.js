import React, { useContext } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import ResponsiveBox from "../Components/ResponsiveBox";

import { Store } from "../GlobalState/store";

import Intro from "./Intro";
import Main from "./Main";

const LoggedOutRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Intro} />
      <Route path="/main" exact component={Main} />
      <Redirect from={"*"} to={"/"} />
    </Switch>
  </BrowserRouter>
);

const LoggedInRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Intro} />
      <Redirect from={"*"} to={"/"} />
    </Switch>
  </BrowserRouter>
);

const Routes = () => {
  const { state } = useContext(Store);

  return <ResponsiveBox contents={state.isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />} />;
};

export default Routes;
