import { Action } from "../TReducerType";

const privateResultStateInitialState = {};

export const privateResultState = (
  state = privateResultStateInitialState,
  action: Action
) => {
  switch (action.type) {
    default:
      return state;
  }
};
