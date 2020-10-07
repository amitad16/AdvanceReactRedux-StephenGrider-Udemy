import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "components/App";
import Routes from "Routes";
import Root from "Root";

ReactDOM.render(
  <Root>
    <Router>
      <App>
        <Routes />
      </App>
    </Router>
  </Root>,
  document.querySelector("#root")
);
