import React, { useState } from "react";
import FormSignIn from "./FormSignIn";
import FormRegister from "./FormRegister";

const SignIn = () => {
  const [currentForm, setCurrentForm] = useState("signIn");
  const [classNameButtonSignin, setClassNameButtonSignin] =
    useState(" sign-in lt-active");
  const [classNameButtonRegister, setClassNameButtonRegister] =
    useState(" register");

  const handleSignIn = (e) => {
    e.preventDefault();
    if (currentForm === "register") {
      setClassNameButtonSignin(" sign-in lt-active");
      setClassNameButtonRegister(" register");
    }
    setCurrentForm("signIn");
  };
  const handleRegister = (e) => {
    e.preventDefault();
    if (currentForm === "signIn") {
      setClassNameButtonRegister(" register lt-active");
      setClassNameButtonSignin(" sign-in");
    }
    setCurrentForm("register");
  };
  return (
    <div>
      <div className="login-link row mx-0">
        <button
          className={"px-3 py-2 col fs-4" + classNameButtonSignin}
          type="button"
          onClick={handleSignIn}
        >
          Sign In
        </button>
        <button
          className={"px-3 py-2 col fs-4" + classNameButtonRegister}
          type="button"
          onClick={handleRegister}
        >
          Register
        </button>
      </div>
      <div className="login-form py-5 px-3">
        {currentForm === "signIn" && <FormSignIn />}
        {currentForm === "register" && <FormRegister />}
      </div>
    </div>
  );
};

export default SignIn;
