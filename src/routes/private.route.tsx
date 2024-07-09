import { Navigate, Outlet } from "react-router-dom";
import { authenticatedUser } from "../utils/token/token";

type ProtectedRouteType = {
  isUserRequired?: boolean;
};

const PrivateRoute = (props: ProtectedRouteType) => {
  const auth = authenticatedUser();
  if (props.isUserRequired) {
    return auth ? <Outlet /> : <Navigate to="/login" />;
  } else {
    return auth ? <Outlet /> : <Navigate to="/login" />;
  }
};

export default PrivateRoute;
