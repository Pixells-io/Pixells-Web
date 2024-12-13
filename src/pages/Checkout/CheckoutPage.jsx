import InputForm from "@/components/Inputs/InputForm";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useElements, useStripe } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

function CheckoutPage() {
  const stripePromise = loadStripe(
    "pk_test_51PyGmMKXSubr80miZXgW8qVSKvBrpYohdMoGkfDgEHTJygsL4LtgdC4DV0hY46Xp0lgpOWxukCgCMKichwyX2WUB00TIoOUkUt",
  );

  return (
    <div className="w-full">
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}

export default CheckoutPage;
