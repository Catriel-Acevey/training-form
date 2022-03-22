import React from "react";
import Survey from "./Components/Survey";
import SchoolDetail from "./Components/SchoolDetail";
import Contact from "./Components/Contact";
import JobDetail from "./Components/JobDetail";
import { Routes, Route } from "react-router";

export const studentRoute = () => {
  return (
    <Routes>
      <Route path="/form/school-info" component={SchoolDetail} />
      <Route path="/form/contact" component={Contact} />
    </Routes>
  );
};
export const workerRoute = () => {
  return (
    <Routes>
      <Route path="/form/job-info" component={JobDetail} />
      <Route path="/form/survey" component={Survey} />
      <Route path="/form/contact" component={Contact} />
    </Routes>
  );
};
export const unemployedRoute = () => {
  return (
    <Routes>
      <Route path="/form/contact" component={Contact} />
    </Routes>
  );
};
