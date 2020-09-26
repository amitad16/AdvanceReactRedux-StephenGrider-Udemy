import commentsReducer from "reducers/comments";

import { SAVE_COMMENT } from "actions/types";

it(`handles action of type ${SAVE_COMMENT}`, () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "New Comment",
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual(["New Comment"]);
});

it("handles action with empty type", () => {
  const action = {
    type: null,
    payload: "New Comment",
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual([]);
});

it("handles action with unknown type", () => {
  const action = {
    type: "UNKNOWN",
    payload: "New Comment",
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual([]);
});
