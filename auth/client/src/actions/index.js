import axios from "axios";

import { AUTH_USER, AUTH_ERROR } from "actions/types";

export const signup = (formProps, cb) => async dispatch => {
  try {
    const response = await axios.post(
      "http://localhost:3090/signup",
      formProps
    );

    dispatch({ type: AUTH_USER, payload: response.data.token });

    localStorage.setItem("token", response.data.token);

    cb();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: e.response.data.error });
  }
};

export const signin = (formProps, cb) => async dispatch => {
  try {
    const response = await axios.post(
      "http://localhost:3090/signin",
      formProps
    );

    dispatch({ type: AUTH_USER, payload: response.data.token });

    localStorage.setItem("token", response.data.token);

    cb();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Invalid email or password" });
  }
};

export const signout = () => dispatch => {
  localStorage.removeItem("token");

  dispatch({ type: AUTH_USER, payload: "" });
};
