import React from "react";
import { mount } from "enzyme";
import { BrowserRouter as Router, Link } from "react-router-dom";

import Root from "Root";
import Header from "components/Header";

describe("not realted to auth", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Root>
        <Router>
          <Header />
        </Router>
      </Root>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("has a base className `header`", () => {
    expect(wrapper.find("div").get(0).props.className).toEqual("header");
  });

  it("always renders root Link", () => {
    expect(wrapper.find(Link).get(0).props.to).toEqual("/");
  });
});

describe("user not authenticated", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Root initialState={{ auth: { authenticated: "" } }}>
        <Router>
          <Header />
        </Router>
      </Root>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("renders SignUp link", () => {
    const linkWrapper = wrapper.find("div").last();
    expect(linkWrapper.children("Link").get(0).props.to).toEqual("/signup");
  });

  it("renders SignIn link", () => {
    const linkWrapper = wrapper.find("div").last();
    expect(linkWrapper.children("Link").get(1).props.to).toEqual("/signin");
  });
});

describe("user is authenticated", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Root initialState={{ auth: { authenticated: "token" } }}>
        <Router>
          <Header />
        </Router>
      </Root>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("renders Feature link", () => {
    const linkWrapper = wrapper.find("div").last();

    expect(linkWrapper.find("Link").get(0).props.to).toEqual("/feature");
  });

  it("renders SignOut link", () => {
    const linkWrapper = wrapper.find("div").last();

    expect(linkWrapper.find("Link").get(1).props.to).toEqual("/signout");
  });
});
