import React from "react";
import "bootswatch/dist/lux/bootstrap.min.css";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log(paymentMethod);
    }
    props.next(paymentMethod, true);
  };

  return (
    <form onSubmit={handleSubmit} className="card card-body">
      <img
        src="https://pngimg.com/uploads/subscribe/subscribe_PNG10.png"
        alt="suscribe"
        className="img-fluid"
      />
      <div className="form-group">
        <CardElement className="form-control" />
      </div>
      <button
        className="btn btn-outline-danger"
        type="button"
        onClick={() => props.prev()}
      >
        Back
      </button>
      <button className="btn btn-success"> Buy </button>
    </form>
  );
};

export default CheckoutForm;
