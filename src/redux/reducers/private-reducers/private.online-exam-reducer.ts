import { Action } from "../TReducerType";

const privateOnlineExamStateInitialState = {};

export const privateOnlineExamState = (
  state = privateOnlineExamStateInitialState,
  action: Action
) => {
  switch (action.type) {
    default:
      return state;
  }
};
