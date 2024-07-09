import { combineReducers } from "redux";
import { menuItem } from "./private-reducers/private-menuItems.reducer";

const reducerIndex = combineReducers({
  menuItem: menuItem,
});

export default reducerIndex;
