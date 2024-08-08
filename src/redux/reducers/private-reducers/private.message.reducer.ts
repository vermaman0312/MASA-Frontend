import { Action } from "../TReducerType";

const privateMessageStateInitialState = {};

export const privateMessageState = (
  state = privateMessageStateInitialState,
  action: Action
) => {
  switch (action.type) {
    default:
      return state;
  }
};
