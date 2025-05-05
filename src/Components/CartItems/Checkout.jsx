import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { useNavigate } from "react-router-dom";
import { currency } from "../../App";

const Checkout = () => {
  const { getTotalCartAmount } = useContext(ShopContext);
  const navigate = useNavigate();
  const rawAmount = getTotalCartAmount();
  const maxAllowed = 99999; // Razorpay test mode limit
  const totalAmount = rawAmount > maxAllowed ? maxAllowed : rawAmount;

  const handlePayment = async () => {
    if (rawAmount > maxAllowed) {
      alert(`Test mode supports a maximum payment of ₹${maxAllowed}. Please reduce your cart value.`);
      return;
    }

    const options = {
      key: "rzp_test_IF1DBodiUgtI93", // Your Razorpay API Key
      amount: totalAmount * 100, // in paise
      currency: "INR",
      name: "Your Shop Name",
      description: "Payment for your order",
      image: "https://yourwebsite.com/logo.png",
      handler: function (response) {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        navigate("/");
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="checkout-container">
      <div className="checkout">
        <h1>Checkout</h1>
        <div className="checkout-summary">
          <p>
            Total Amount: <strong>{currency}{rawAmount}</strong>
          </p>
          <button onClick={handlePayment} className="pay-button">
            Pay with Google Pay / UPI
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
