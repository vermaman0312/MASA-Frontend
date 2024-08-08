import { Action } from "../TReducerType";

const privateNoteStateInitialState = {};

export const privateNoteState = (
  state = privateNoteStateInitialState,
  action: Action
) => {
  switch (action.type) {
    default:
      return state;
  }
};
