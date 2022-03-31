import React from "react";
import { Route, Routes } from "react-router";
import FormSignIn from "./components/Sign-in-sass/FormSignIn";
import FormRegister from "./components/Sign-in-sass/FormRegister";
import FormRecover from "./components/Sign-in-sass/FormRecover";
import "./scss/App.scss";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

// const stripePromise = loadStripe(
//   "pk_test_51KRcgGEpX8DBeifaxlqkhlxhhX3Nje6n84bDMqd3Q1EZ6Xg5K623HuyOvTj4oFuJ8Sqpxdu0xyizb0XPdRVKFCSG00cUiebq1J"
// );

function App() {
  return (
    // <Elements stripe={stripePromise}>
    //   <div className="container p-4">
    //     <div className="row">
    //       <div className="col-md-4 offset-md-4">
    //       </div>
    //     </div>
    //   </div>
    // </Elements>
    <Routes>
      <Route path="user/sign-in" element={<FormSignIn />} />
      <Route path="user/register" element={<FormRegister />} />
      <Route path="parents/forgot-password" element={<FormRecover />} />
    </Routes>
  );
}

export default App;
