import { Action } from "../TReducerType";

const privateUsersStateInitialState = {};

export const privateUsersState = (
  state = privateUsersStateInitialState,
  action: Action
) => {
  switch (action.type) {
    default:
      return state;
  }
};
