import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();
  const location = useLocation();

  if (loading) return <p>Loading.....</p>;
  return currentUser?.uid && !loading ? (
    children
  ) : (
    <Navigate replace state={{ from: location.pathname }} to={"/login"} />
  );
};

export default PrivateRoute;
