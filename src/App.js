import React, { useState } from "react";

function App() {
  const [paymentDone, setPaymentDone] = useState(false);

  const handlePayment = async () => {
    const options = {
      key: "rzp_test_SuUQnEe92BjnyD",
      amount: 500, // amount in paise = ₹50
      currency: "INR",
      name: "Photo Store",
      description: "Purchase Photo",
      image: "https://photo-store-live-x1up.vercel.app/logo.png", // optional
      handler: function (response) {
        // You can verify payment here (optional for test mode)
        alert("Payment successful! 🎉");
        setPaymentDone(true);
      },
      prefill: {
        name: "Customer",
        email: "test@example.com",
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
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Buy This Premium Photo</h1>
      <button
        onClick={handlePayment}
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          backgroundColor: "#008cff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Pay ₹50
      </button>

      {paymentDone && (
        <div style={{ marginTop: "20px" }}>
          <a
            href="/photo.jpg"
            download
            style={{
              textDecoration: "none",
              padding: "10px 20px",
              backgroundColor: "green",
              color: "white",
              borderRadius: "5px",
            }}
          >
            Download Photo
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
<a href="/photo.jpg" download>
  <button>Download Photo</button>
</a>
