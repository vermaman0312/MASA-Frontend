import { combineReducers } from "redux";
import { menuItem } from "./private-reducers/private-menuItems.reducer";
import { applicationMenu } from "./private-reducers/private-application.reducer";
import { publicAuthState } from "./public-reducers/public-authentication.reducer";
import { deviceDetailsState } from "./private-reducers/private-device-details.reducer";

const reducerIndex = combineReducers({
  menuItem: menuItem,
  publicAuthState: publicAuthState,
  deviceDetailsState: deviceDetailsState,
  applicationMenu: applicationMenu,
});

export default reducerIndex;
