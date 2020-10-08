import React from "react";
import { mount } from "enzyme";

import Feature from "components/Feature";
import Root from "Root";

describe("not authenticated", () => {
  it("renders feature component message", () => {
    const wrapped = mount(
      <Root initialState={{ auth: { authenticated: "" } }}>
        <Feature history={{ push: () => {} }} />
      </Root>
    );

    expect(wrapped.find("div").length).toEqual(1);

    wrapped.unmount();
  });
});
