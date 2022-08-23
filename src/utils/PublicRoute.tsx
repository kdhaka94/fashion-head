import {
    Navigate,
  } from 'react-router-dom';
  import Cookies from "js-cookie";
  
  export default function PublicRoute({ children }) {
    const isLoggedToken = Cookies.get("auth_token");
    if (isLoggedToken) {
      return <Navigate to="/" replace />;
    }
    return children;
  }