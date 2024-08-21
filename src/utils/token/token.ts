export const authenticatedUser = () => {
  const token = localStorage.getItem("token");

  if (token) {
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
  const token = localStorage.getItem("token");

  if (token) {
    return {
      isAuthenticated: true,
      userId: "123",
      role: "admin",
      verifyToken: "123",
      token: token,
    };
  } else {
    return {
      isAuthenticated: false,
      userId: null,
      role: null,
      verifyToken: null,
      token: null,
    };
  }
};
