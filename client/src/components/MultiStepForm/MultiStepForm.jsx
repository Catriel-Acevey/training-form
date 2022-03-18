import React, { useState } from "react";
import FormRegister from "./FormRegister";
import PlanSelect from "../PlanSelect";
import CheckoutForm from "./CheckoutForm";

const MultiStepFormTest = () => {
  const [data, setData] = useState({
    plan: "",
    paymentMethod: {},
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
    <FormRegister next={handleNextStep} data={data} />,
    <PlanSelect next={handleNextStep} data={data} />,
    <CheckoutForm next={handleNextStep} prev={handlePrevStep} data={data} />,
  ];

  console.log("data", data);

  return <div>{steps[currentStep]}</div>;
};

export default MultiStepFormTest;
