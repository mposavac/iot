import React from "react";
import "./LoginPresenter.scss";

export default function LoginPresenter({ values, handleFormChange, submit }) {
  return (
    <div className="login">
      <div className="login__mail">
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleFormChange}
        />
      </div>

      <div className="login__password">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleFormChange}
        />
      </div>

      <button onClick={submit}>Login</button>
    </div>
  );
}
