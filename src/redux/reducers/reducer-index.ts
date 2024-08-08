import { combineReducers } from "redux";
import { publicAuthState } from "./public-reducers/public-authentication.reducer";
import { publicComponentState } from "./public-reducers/public-component.reducer";
import { privateComponentState } from "./private-reducers/private.component.reducer";
import { privateApplicationState } from "./private-reducers/private-application.reducer";

const reducerIndex = combineReducers({
  // Public
  publicComponentState: publicComponentState,
  publicAuthState: publicAuthState,
  // Private
  privateComponentState: privateComponentState,
  privateApplicationState: privateApplicationState,
});

export default reducerIndex;
