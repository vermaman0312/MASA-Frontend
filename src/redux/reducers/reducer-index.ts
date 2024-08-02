import { combineReducers } from "redux";
import { menuItem } from "./private-reducers/private-menuItems.reducer";
import { applicationMenu } from "./private-reducers/private-application.reducer";
import { publicAuthState } from "./public-reducers/public-authentication.reducer";
import { publicComponentState } from "./public-reducers/public-component.reducer";

const reducerIndex = combineReducers({
  menuItem: menuItem,
  publicComponentState: publicComponentState,
  publicAuthState: publicAuthState,
  applicationMenu: applicationMenu,
});

export default reducerIndex;
