import { combineReducers } from "redux";
import { menuItem } from "./private-reducers/private-menuItems.reducer";
import { applicationMenu } from "./private-reducers/private-application.reducer";

const reducerIndex = combineReducers({
  menuItem: menuItem,
  applicationMenu: applicationMenu,
});

export default reducerIndex;
