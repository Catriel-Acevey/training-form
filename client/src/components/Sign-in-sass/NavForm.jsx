import React from "react";
import { NavLink } from "react-router-dom";

const NavForm = () => {
  return (
    <div className="login-link row mx-0">
      <NavLink
        className={({ isActive }) =>
          "login-link sign-in text-center px-3 py-2 col fs-5" +
          (isActive ? " lt-active" : "")
        }
        to="/user/sign-in"
      >
        Sign In
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          "login-link register text-center px-3 py-2 col fs-5" +
          (isActive ? " lt-active" : "")
        }
        to="/user/register"
      >
        Register
      </NavLink>
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
  );
};

export default NavForm;
