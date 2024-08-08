import { Action } from "../TReducerType";

const privateTimeTableStateInitialState = {};

export const privateTimeTableState = (
  state = privateTimeTableStateInitialState,
  action: Action
) => {
  switch (action.type) {
    default:
      return state;
  }
};
