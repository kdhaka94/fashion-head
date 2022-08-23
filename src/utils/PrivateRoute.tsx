import {
  Navigate,
} from 'react-router-dom';
import Cookies from "js-cookie";

export default function PrivateRoute({ children }) {
  const isLoggedToken = Cookies.get("auth_token");
  if (!isLoggedToken) {
    return <Navigate to="/login" replace />;
  }

  return children;
}