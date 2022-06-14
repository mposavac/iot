import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationPresenter.scss";

export default function NavigationPresenter({ handleLogout }) {
  return (
    <div className="">
      <div className="">
        <NavLink to="/">
          <p>Home</p>
        </NavLink>
      </div>
      <div className="">
        <NavLink to="my-devices">
          <p>My Devices</p>
        </NavLink>
      </div>
      <div className="">
        <p onClick={handleLogout}>Log out</p>
      </div>
    </div>
  );
}
