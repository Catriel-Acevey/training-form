import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const StepOne = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };

  return (
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
      {() => (
        <Form>
          <p>First Name</p>
          <Field name="first_name" />
          <ErrorMessage name="first_name" />

          <p>Last Name</p>
          <Field name="last_name" />
          <ErrorMessage name="last_name" />

          <button type="submit">Next</button>
        </Form>
      )}
    </Formik>
  );
};

const StepTwo = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };

  return (
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form>
          <label>
            <Field type="radio" name="plan" value="monthly" /> Monthly
          </label>
          <label>
            <Field type="radio" name="plan" value="yearly" /> Yearly
          </label>

          <button type="button" onClick={() => props.prev(values)}>
            Back
          </button>
          <button type="submit">Next</button>
        </Form>
      )}
    </Formik>
  );
};
const StepTree = (props) => {
  const handleSubmit = (values) => {
    props.next(values, true);
  };

  return (
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form>
          <p>Email</p>
          <Field name="email" />
          <ErrorMessage name="email" />

          <p>Password</p>
          <Field name="password" />
          <ErrorMessage name="password" />

          <button type="button" onClick={() => props.prev(values)}>
            Back
          </button>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

const MultiStepFormTest = () => {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    plan: "",
    email: "",
    password: "",
  });
  const [currentStep, setCurrentStep] = useState(0);

  const makeRequest = (formData) => {
    console.log("Form Submitted", formData);
  };

  const handleNextStep = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));

    if (final) {
      makeRequest(newData);
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const steps = [
    <StepOne next={handleNextStep} data={data} />,
    <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />,
    <StepTree next={handleNextStep} prev={handlePrevStep} data={data} />,
  ];

  console.log("data", data);

  return <div>{steps[currentStep]}</div>;
};

export default MultiStepFormTest;
