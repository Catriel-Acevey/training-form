import React, { useState } from "react";
import FormSignIn from "./FormSignIn";
import FormRegister from "./FormRegister";
import { NavLink } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <div className="login-link row mx-0">
        <NavLink to="user/sign-in">Sign In</NavLink>
        <NavLink to="user/register">Register</NavLink>
        {/* <button
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
        </button> */}
      </div>
    </div>
  );
};

export default SignIn;
