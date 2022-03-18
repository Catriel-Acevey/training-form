import React, { useState } from "react";
import "bootswatch/dist/lux/bootstrap.min.css";
import FormSignIn from "./FormSignIn";
import FormRegister from "./FormRegister";

const SignIn = () => {
  const [currentForm, setCurrentForm] = useState("signIn");
  const handleSignIn = (e) => {
    e.preventDefault();
    setCurrentForm("signIn");
  };
  const handleRegister = (e) => {
    e.preventDefault();
    setCurrentForm("register");
  };
  return (
    <div>
      <div>
        <button
          type="button"
          onClick={handleSignIn}
          className="btn btn-outline-primary"
        >
          Sign In
        </button>
        <button
          type="button"
          onClick={handleRegister}
          className="btn btn-outline-primary"
        >
          Register
        </button>
      </div>
      {currentForm === "signIn" && <FormSignIn />}
      {currentForm === "register" && <FormRegister />}
    </div>
  );
};

export default SignIn;
