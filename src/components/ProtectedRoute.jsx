import { Navigate } from "react-router-dom";
import { useAuth } from "./useAuth";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;
