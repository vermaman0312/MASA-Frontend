import { Action } from "../TReducerType";

const privateDashboardStateInitialState = {};

export const privateDashboardState = (
  state = privateDashboardStateInitialState,
  action: Action
) => {
  switch (action.type) {
    default:
      return state;
  }
};
