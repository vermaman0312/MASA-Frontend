import { Action } from "../TReducerType";

const privateVMeetStateInitialState = {};

export const privateVMeetState = (
  state = privateVMeetStateInitialState,
  action: Action
) => {
  switch (action.type) {
    default:
      return state;
  }
};
