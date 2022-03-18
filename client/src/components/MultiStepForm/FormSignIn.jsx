import React from "react";
import "bootswatch/dist/lux/bootstrap.min.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

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
          <Form className="card card-body">
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <Field
                className="form-control"
                type="email"
                id="email"
                name="email"
                placeholder="email@email.com"
              />
              <ErrorMessage
                name="email"
                component={() => <p className="text-danger">{errors.email}</p>}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <Field
                className="form-control"
                type="password"
                id="password"
                name="password"
                placeholder="************"
              />
              <ErrorMessage
                name="password"
                component={() => (
                  <p className="text-danger">{errors.password}</p>
                )}
              />
            </div>

            <button className="btn btn-primary" type="submit">
              Sign in
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormSignIn;
