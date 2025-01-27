import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

function CheckoutPage() {
  const stripePromise = loadStripe(
    "pk_live_51PyGmMKXSubr80miO7KKKsK2txCnNGEzId43xAzGmuvuPhsLE8UXaB1esuKoHouhQpOkf86WzGNntjZ46SQGATUA00WnC2b1mC",
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
