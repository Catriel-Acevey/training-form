import React from "react";
import "./scss/App.scss";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
// import SignIn from "./components/Sign-In/SignIn";
import SignIn from "./components/Sign-in-sass/SignIn";

const stripePromise = loadStripe(
  "pk_test_51KRcgGEpX8DBeifaxlqkhlxhhX3Nje6n84bDMqd3Q1EZ6Xg5K623HuyOvTj4oFuJ8Sqpxdu0xyizb0XPdRVKFCSG00cUiebq1J"
);

function App() {
  return (
    <Elements stripe={stripePromise}>
      <div className="container p-4">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <SignIn />
          </div>
        </div>
      </div>
    </Elements>
  );
}

export default App;
