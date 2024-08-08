import { Action } from "../TReducerType";

const privateFeePaymentStateInitialState = {};

export const privateFeePaymentState = (
  state = privateFeePaymentStateInitialState,
  action: Action
) => {
  switch (action.type) {
    default:
      return state;
  }
};
