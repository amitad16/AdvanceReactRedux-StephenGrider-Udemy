import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import reduxThunk from "redux-thunk";

import reducers from "reducers";

import App from "components/App";
import Welcome from "components/Welcome";
import Signup from "components/auth/Signup";
import Feature from "components/Feature";
import Signout from "components/auth/Signout";
import Signin from "components/auth/Signin";

const store = createStore(
  reducers,
  {
    auth: { authenticated: localStorage.getItem("token") }
  },
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/feature" exact component={Feature} />
        <Route path="/signout" exact component={Signout} />
        <Route path="/signin" exact component={Signin} />
      </App>
    </Router>
  </Provider>,
  document.querySelector("#root")
);
