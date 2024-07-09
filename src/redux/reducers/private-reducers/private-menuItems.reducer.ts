import { PRIVATE_MENU_OPTION } from "../../constants/private-constants/private-menuItems.constant";

interface Action {
  type: string;
  payload: string;
}

const menuItemsIntialState = {
  menuItem: "dashboard",
};

export const menuItem = (state = menuItemsIntialState, action: Action) => {
  switch (action.type) {
    case PRIVATE_MENU_OPTION:
      return {
        ...state,
        menuItem: action.payload,
      };
    default:
      return state;
  }
};
