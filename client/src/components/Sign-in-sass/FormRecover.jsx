import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import * as Yup from "yup";

function FormRecover() {
  const validate = Yup.object({
    email: Yup.string()
      .required("Please enter an email")
      .email("The email entered is not valid"),
  });
  const handleSubmit = (values) => {
    console.log("you registered successfully");
  };
  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="region row">
            <div className="col-md-6 d-flex align-items-center">
              <Formik
                initialValues={{
                  email: "",
                }}
                validationSchema={validate}
                onSubmit={handleSubmit}
              >
                {({ errors, touched }) => (
                  <Form className="form">
                    <div className="mb-3">
                      <label className="form-label" htmlFor="email-register">
                        Your Email
                      </label>
                      <p>Enter your username below to reset your password.</p>
                      <Field
                        className={`form-control ${
                          errors.email && touched.email && "is-invalid"
                        }`}
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
                    <div className="mb-3"></div>

                    <div class="d-flex flex-row-reverse bd-highlight">
                      <button
                        className="form-submit btn-register py-2 fs-6"
                        type="submit"
                      >
                        E-mail new password
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormRecover;
