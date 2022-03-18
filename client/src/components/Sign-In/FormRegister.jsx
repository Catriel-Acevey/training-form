import React, { useRef, useState } from "react";
import "bootswatch/dist/lux/bootstrap.min.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import md5 from "md5";
import axios from "axios";

const FormRegister = () => {
  const [validCaptcha, setValidCaptcha] = useState(null);
  const captcha = useRef(null);
  const onChange = () => {
    if (captcha.current.getValue()) {
      setValidCaptcha(true);
    }
  };
  const submit = async (values) => {
    try {
      var response = await axios.post("http://localhost:3001/users", {
        email: values.email,
        password: md5(values.password),
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmit = (values) => {
    if (captcha.current.getValue()) {
      setValidCaptcha(true);

      submit(values);
      console.log("you registered successfully");
    } else {
      setValidCaptcha(false);
    }
  };
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
        onSubmit={handleSubmit}
      >
        {({ errors }) => (
          <Form className="card card-body">
            <div className="form-group">
              <label className="form-label" htmlFor="email-register">
                Your Email
              </label>
              <Field
                className="form-control mb-4"
                type="email"
                id="email-register"
                name="email"
                placeholder="email@email.com"
              />
              <ErrorMessage
                name="email"
                component={() => <p className="text-danger">{errors.email}</p>}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password-register">
                Password
              </label>
              <Field
                className="form-control mb-4"
                type="password"
                id="password-register"
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
            <div className="form-group">
              <ReCAPTCHA
                ref={captcha}
                sitekey="6LexTJYeAAAAAO9cioYdAmJNEEwypY6_TDiPmv_V"
                onChange={onChange}
                className="mb-4 d-flex justify-content-center"
              />
              {validCaptcha === false && (
                <p className="text-danger"> please complete the captcha </p>
              )}
            </div>

            <button className="btn btn-success" type="submit">
              Next
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormRegister;
