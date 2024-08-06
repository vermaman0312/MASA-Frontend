import { combineReducers } from "redux";
import { menuItem } from "./private-reducers/private-menuItems.reducer";
import { applicationMenu } from "./private-reducers/private-application.reducer";
import { publicAuthState } from "./public-reducers/public-authentication.reducer";
import { deviceDetailsState } from "./private-reducers/private-device-details.reducer";
import { publicComponentState } from "./public-reducers/public-component.reducer";

const reducerIndex = combineReducers({
  publicComponentState: publicComponentState,
  publicAuthState: publicAuthState,
  deviceDetailsState: deviceDetailsState,
  menuItem: menuItem,
  applicationMenu: applicationMenu,
});

export default reducerIndex;
