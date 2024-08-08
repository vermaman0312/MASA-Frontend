import { Action } from "../TReducerType";

const privateSettingStateInitialState = {};

export const privateSettingState = (
  state = privateSettingStateInitialState,
  action: Action
) => {
  switch (action.type) {
    default:
      return state;
  }
};
