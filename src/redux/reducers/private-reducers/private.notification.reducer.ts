import { Action } from "../TReducerType";

const privateNotificationStateInitialState = {};

export const privateNotificationState = (
  state = privateNotificationStateInitialState,
  action: Action
) => {
  switch (action.type) {
    default:
      return state;
  }
};
