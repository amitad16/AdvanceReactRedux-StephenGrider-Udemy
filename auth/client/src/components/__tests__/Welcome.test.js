import React from "react";
import { shallow } from "enzyme";

import Welcome from "components/Welcome";

it("renders welcome message", () => {
  const wrapper = shallow(<Welcome />);

  expect(wrapper.find("h3").length).toEqual(1);
});
