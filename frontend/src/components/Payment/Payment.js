import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import SelectedPackageContext from "../../contexts/SelectedPackageContext";
import PayPalPayment from "../PayPalPayment/PayPalPayment";
import StripePayment from "../StripePayment/StripePayment";
import "./Payment.css";

const Payment = () => {
  const { selectedPackage } = useContext(SelectedPackageContext);
  const navigate = useNavigate();

  if (!selectedPackage) {
    navigate("/package-selection");
    return null;
  }

  return (
    <div className="payment">
      <h2>Payment</h2>
      <h3>{selectedPackage.packageName}</h3>
      <p>${selectedPackage.packagePrice}</p>
      <div className="payment-methods">
        <h4>Select payment method:</h4>
        <PayPalPayment amount={selectedPackage.packagePrice} />
        <StripePayment amount={selectedPackage.packagePrice} />
      </div>
    </div>
  );
};

export default Payment;
