import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = (props) => {
  const context = useContext(AuthContext);
  const location = useLocation();

  if (!context.isAuthenticated) {
    return <Navigate to={"/login"} state={location.pathname} />;
  }

  return props.children;
};
export default PrivateRoute;
