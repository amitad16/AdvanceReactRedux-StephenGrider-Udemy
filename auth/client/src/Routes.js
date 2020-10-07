import React from "react";
import { Route } from "react-router-dom";

import Welcome from "components/Welcome";
import Signup from "components/auth/Signup";
import Feature from "components/Feature";
import Signout from "components/auth/Signout";
import Signin from "components/auth/Signin";

const Routes = () => {
  return (
    <>
      <Route path="/" exact component={Welcome} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/feature" exact component={Feature} />
      <Route path="/signout" exact component={Signout} />
      <Route path="/signin" exact component={Signin} />
    </>
  );
};

export default Routes;
