import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavigationPresenter from "../NavigationPresenter/NavigationPresenter";
import { getAuth, signOut } from "firebase/auth";

export default function NavigationContainer() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (pathname !== "/login" && pathname !== "/signup") setShouldRender(true);
    else setShouldRender(false);
  }, [pathname]);

  const logout = () => {
    const auth = getAuth();
    signOut(auth);
    navigate("/login");
  };

  return shouldRender ? <NavigationPresenter handleLogout={logout} /> : <></>;
}
