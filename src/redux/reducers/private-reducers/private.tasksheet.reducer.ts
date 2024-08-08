import { Action } from "../TReducerType";

const privateTaskSheetStateInitialState = {};

export const privateTaskSheetState = (
  state = privateTaskSheetStateInitialState,
  action: Action
) => {
  switch (action.type) {
    default:
      return state;
  }
};
