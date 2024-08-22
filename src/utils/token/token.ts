import { customGetCookies } from "../custom-cookies/custom-cookies.util";

export const authenticatedUser = () => {
  const { userToken } = customGetCookies("userAuthToken");

  if (userToken) {
    return true;
  } else {
    return false;
  }
};

export const authenticatedUserRole = () => {
  const role = "admin";
  return role;
};

export const authenticatedLoggedInUser = () => {
  const { userToken } = customGetCookies("userAuthToken");

  if (userToken) {
    return {
      isAuthenticated: true,
      userId: "123",
      role: "admin",
      deviceToken: "123",
      token: userToken,
    };
  } else {
    return {
      isAuthenticated: false,
      userId: null,
      role: null,
      deviceToken: null,
      token: null,
    };
  }
};
