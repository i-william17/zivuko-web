import React, { useState , useEffect } from "react";
import { server } from "../../server";
import axios from "axios";
import "./Mpesa.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Mpesa = () => {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [orderData, setOrderData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const storedOrderData = JSON.parse(localStorage.getItem("latestOrder"));
    setOrderData(storedOrderData);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.post(
            `${server}/mpesa/token`,
            {
                phone: phone,
                amount: Math.round(orderData?.totalPrice),
            },
            config
        );

            const checkMpesaPayment = setInterval(async () => {
                try {
                    const { data: paymentStatus } = await axios.get(
                        `${server}/mpesa/token/${data.transactionId}`,
                        config
                    );

                    if (paymentStatus.status === "succeeded") {
                        clearInterval(checkMpesaPayment);

                        const order = {
                            ...orderData,
                            paymentInfo: {
                                id: data.transactionId,
                                status: "succeeded",
                                type: "M-Pesa",
                            },
                        };

                        await axios.post(`${server}/order/create-order`, order, config);
                        setLoading(false);
                        navigate("/order/success");
                        toast.success("Order successful!");
                        localStorage.setItem("cartItems", JSON.stringify([]));
                        localStorage.setItem("latestOrder", JSON.stringify([]));
                        window.location.reload();
                    }
                } catch (error) {
                    clearInterval(checkMpesaPayment);
                    setLoading(false);
                    console.log(error);
                    toast.error("An error occurred while checking the payment status.");
                }
            }, 5000);

    } catch (error) {
        setLoading(false);
        console.log(error);
        toast.error("An error occurred while processing the payment.");
    }
};

  return (
    <div className="mpesa-form-container">
      <h2>Mpesa Payment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter valid Mpesa Number"
            required
          />
        </div>
        <div className="form-group">
          <label>Amount:</label>
          <input
            type="number"
            value={orderData?.totalPrice}
            readOnly
            className="form-group"
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </form>
      {message && <p className={message.startsWith("Error") ? "error-message" : "success-message"}>{message}</p>}
    </div>
  );
};

export { Mpesa };
