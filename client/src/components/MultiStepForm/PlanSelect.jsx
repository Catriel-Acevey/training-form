import React from "react";
import "bootswatch/dist/lux/bootstrap.min.css";
import { Formik, Form, Field } from "formik";

const PlanSelect = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };

  return (
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form className="card card-body">
          <div className="form-group">
            <label className="form-check-label">
              <Field
                className="form-check-input"
                type="radio"
                name="plan"
                value="monthly"
              />{" "}
              Monthly
            </label>
            <label className="form-check-label">
              <Field
                className="form-check-input"
                type="radio"
                name="plan"
                value="yearly"
              />{" "}
              Yearly
            </label>
          </div>
          <button className="btn btn-success" type="submit">
            Next
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default PlanSelect;
