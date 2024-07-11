export const authenticatedUser = () => {
  const token = localStorage.getItem("token");

  if (token) {
    return true;
  } else {
    return false;
  }
};

export const authenticatedUserRole = () => {
  const role = "teacher";
  return role;
};
