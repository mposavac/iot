import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginPresenter from "../LoginPresenter/LoginPresenter";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function LoginContainer() {
  const [values, setValues] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleFormChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submit = () => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <LoginPresenter
      values={values}
      handleFormChange={handleFormChange}
      submit={submit}
    />
  );
}
