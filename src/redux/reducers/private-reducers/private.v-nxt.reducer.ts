import { Action } from "../TReducerType";

const privateVNXTStateInitialState = {};

export const privateVNXTState = (
  state = privateVNXTStateInitialState,
  action: Action
) => {
  switch (action.type) {
    default:
      return state;
  }
};
