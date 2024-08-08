import { Action } from "../TReducerType";

const privateCalenderInitialState = {};

export const privateCalenderState = (
  state = privateCalenderInitialState,
  action: Action
) => {
  switch (action.type) {
    default:
      return state;
  }
};
