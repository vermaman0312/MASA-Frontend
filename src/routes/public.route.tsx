import { authenticatedUser } from "../utils/token/token";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const auth = authenticatedUser();
  const token = "123";
  return auth ? (
    <Navigate replace to={`/user/auth/dashboard?token=${token}`} />
  ) : (
    <Outlet />
  );
};

export default PublicRoute;
