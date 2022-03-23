import React, { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import NavForm from "./NavForm";
import TextError from "./TextError";
import * as Yup from "yup";

const FormRegister = () => {
  const [validCaptcha, setValidCaptcha] = useState(null);
  const captcha = useRef(null);
  const onChange = () => {
    if (captcha.current.getValue()) {
      setValidCaptcha(true);
    }
  };
  const validate = Yup.object({
    email: Yup.string()
      .required("Please enter an email")
      .email("The email entered is not valid"),
  });
  const handleSubmit = (values) => {
    if (captcha.current.getValue()) {
      setValidCaptcha(true);
      console.log("you registered successfully");
    } else {
      setValidCaptcha(false);
    }
  };
  return (
    <>
      <div className="container p-4">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <NavForm />
            <div className="login-form px-3 py-5">
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={validate}
                // validate={(values) => {
                //   let errors = {};

                //   // Email validation
                //   if (!values.email) {
                //     errors.email = "Please enter an email";
                //   } else if (
                //     !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                //       values.email
                //     )
                //   ) {
                //     errors.email = "The email entered is not valid";
                //   }

                //   //Password validation
                //   if (!values.password) {
                //     errors.password = "Please enter a password";
                //   }

                //   return errors;
                // }}
                onSubmit={handleSubmit}
              >
                {({ errors }) => (
                  <Form>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="email-register">
                        Your Email
                      </label>
                      <Field
                        className="form-control"
                        type="email"
                        id="email-register"
                        name="email"
                        placeholder="email@email.com"
                      />
                      <ErrorMessage
                        name="email"
                        component={() => <TextError text={errors.email} />}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="password-register">
                        Password
                      </label>
                      <Field
                        className="form-control"
                        type="password"
                        id="password-register"
                        name="password"
                        placeholder="************"
                      />
                      <ErrorMessage
                        name="password"
                        component={() => <TextError text={errors.password} />}
                      />
                    </div>
                    <div className="mb-3">
                      <p>
                        Your password must be at least 8 characters long with at
                        least 1 capital letter
                      </p>
                    </div>
                    <div className="captcha">
                      <ReCAPTCHA
                        ref={captcha}
                        sitekey="6LexTJYeAAAAAO9cioYdAmJNEEwypY6_TDiPmv_V"
                        onChange={onChange}
                      />
                    </div>
                    {validCaptcha === false && (
                      <div className="captcha">
                        {/* <div className="mt-1 text-danger">
                          {" "}
                          please complete the captcha{" "}
                        </div> */}
                        <TextError text={"Please complete the captcha"} />
                      </div>
                    )}
                    <div className="d-grid col-6 mx-auto mt-5">
                      <button
                        className="form-submit btn-register py-2 fs-5"
                        type="submit"
                      >
                        Next
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormRegister;
