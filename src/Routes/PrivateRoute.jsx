import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const PrivateRoute = ({ children }) => {
  let [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        setIsAuthenticated(false);
      }
    });
  }, []);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
