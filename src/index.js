import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";

import { GlobalProvider } from "./GlobalState/store";
import GlobalStyle from "./global-styles";

ReactDOM.render(
  <>
    <GlobalProvider>
      <Routes />
      <GlobalStyle />
    </GlobalProvider>
  </>,
  document.getElementById("root")
);
