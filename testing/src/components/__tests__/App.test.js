import React from "react";
import { shallow } from "enzyme";

import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

it("should render CommentBox", () => {
  expect(wrapper.find(CommentBox).length).toEqual(1);
});

it("should render CommentList", () => {
  expect(wrapper.find(CommentList).length).toEqual(1);
});
