import { Action } from "../TReducerType";

const privateContactStateInitialState = {};

export const privateContactState = (
  state = privateContactStateInitialState,
  action: Action
) => {
  switch (action.type) {
    default:
      return state;
  }
};
