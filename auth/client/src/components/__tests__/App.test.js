import React from "react";
import { shallow } from "enzyme";

import App from "components/App";
import Header from "components/Header";
import Routes from "Routes";

it("should render Header component", () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find(Header).length).toEqual(1);
});

it("renders Routes as children", () => {
  const wrapper = shallow(
    <App>
      <Routes />
    </App>
  );

  expect(wrapper.contains(<Routes />)).toEqual(true);
});
