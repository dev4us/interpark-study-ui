import React, { useContext } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import ResponsiveBox from "../Components/ResponsiveBox";

import { Store } from "../GlobalState/store";

import Intro from "./Intro";
import SignUp from "./SignUp";
import Main from "./Main";
import Write from "./Write";
import Posts from "./Posts";
import MyPage from "./Mypage";

// const LoggedOutRoutes = () => (
//   <BrowserRouter>
//     <Switch>
//       <Route path="/" exact component={Intro} />
//       <Route path="/signup" exact component={SignUp} />
//       <Route path="/main" exact component={Main} />
//       <Redirect from={"*"} to={"/"} />
//     </Switch>
//   </BrowserRouter>
// );

// const LoggedInRoutes = () => (
//   <BrowserRouter>
//     <Switch>
//       <Route path="/" exact component={Intro} />
//       <Route path="/main" exact component={Main} />
//       <Route path="/write" exact component={Write} />
//       <Route path="/posts" exact component={Posts} />
//       <Route path="/mypage" exact component={MyPage} />
//       <Redirect from={"*"} to={"/"} />
//     </Switch>
//   </BrowserRouter>
// );

const JustUIRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/signup" component={SignUp} />
      <Route path="/main" component={Main} />      
      <Route path="/write" component={Write} />
      <Route path="/posts" component={Posts} />
      <Route path="/mypage" component={MyPage} />
      <Route path="/" exact component={Intro} />
      <Redirect from={"*"} to={"/"} />
    </Switch>
  </BrowserRouter>
);

const Routes = () => {
  const { state } = useContext(Store);

  // return <ResponsiveBox contents={state.isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />} />;
  return <ResponsiveBox contents={<JustUIRoutes />} state={state}/>;
  
};

export default Routes;
