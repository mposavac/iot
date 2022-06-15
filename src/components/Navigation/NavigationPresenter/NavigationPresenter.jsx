import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationPresenter.scss";

export default function NavigationPresenter({ handleLogout }) {
  return (
    <div className="navigation">
      
      <div className="navigation__item">
        <NavLink to="/">
          <p>Home</p>
        </NavLink>
      </div>
      <div className="navigation__item">
        <NavLink to="my-devices">
          <p>My Devices</p>
        </NavLink>
      </div>
      <div className="logout">
        <p onClick={handleLogout}>Log out</p>
      </div>
      
      
    </div>
  );
}
