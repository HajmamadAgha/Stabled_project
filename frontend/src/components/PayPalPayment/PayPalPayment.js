import React from "react";
import { PayPalButton } from "react-paypal-button-v2";
import "./PayPalPayment.css";

const PayPalPayment = ({ amount }) => {
  return (
    <PayPalButton
      amount={amount}
      onSuccess={(details, data) => {
        alert("Transaction completed by " + details.payer.name.given_name);
      }}
      options={{
        clientId: "your_paypal_client_id",
      }}
    />
  );
};

export default PayPalPayment;
