import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";

const FormSignIn = () => {
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(values) => {
          let errors = {};

          // Email validation
          if (!values.email) {
            errors.email = "Please enter an email";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              values.email
            )
          ) {
            errors.email = "The email entered is not valid";
          }

          //Password validation
          if (!values.password) {
            errors.password = "Please enter a password";
          }

          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          console.log("You have successfully logged in");
          resetForm();
        }}
      >
        {({ errors }) => (
          <Form>
            <div className="mb-3">
              <label className="form-label" htmlFor="email-signIn">
                Your Email
              </label>
              <Field
                className="form-control"
                type="email"
                id="email-signIn"
                name="email"
                placeholder="email@email.com"
              />
              <ErrorMessage
                name="email"
                component={() => (
                  <div className="text-danger">{errors.email}</div>
                )}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="password-signIn">
                Password
              </label>
              <Field
                className="form-control"
                type="password"
                id="password-signIn"
                name="password"
                placeholder="************"
              />
              <ErrorMessage
                name="password"
                component={() => (
                  <div className="text-danger">{errors.password}</div>
                )}
              />
            </div>
            <div className="mb-3 d-flex justify-content-end">
              <Link to="/">Forgot your password?</Link>
            </div>

            <div className="d-grid col-6 mx-auto mt-5">
              <button
                className="form-submit btn-signin py-2 fs-5"
                type="submit"
              >
                Sign in
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormSignIn;
