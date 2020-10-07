import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "reducers";
import reduxThunk from "redux-thunk";

const INITIAL_STATE = {
  auth: { authenticated: localStorage.getItem("token") }
};

export default ({ children, initialState = INITIAL_STATE }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(reduxThunk)
  );

  return <Provider store={store}>{children}</Provider>;
};
