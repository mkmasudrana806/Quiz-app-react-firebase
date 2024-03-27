import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const PublicRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();

  if (loading) return <p>Loading.....</p>;
  return currentUser?.uid && !loading ? (
    <Navigate replace to={"/"} />
  ) : (
    children
  );
};

export default PublicRoute;
