import { PRIVATE_MENU_OPTION } from "../../constants/private-constants/private-menuItems.constant";

export const menuAction = (menuItem: string) => {
  return {
    type: PRIVATE_MENU_OPTION,
    payload: menuItem,
  };
};
