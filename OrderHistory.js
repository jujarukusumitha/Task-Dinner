import React, { useState } from "react";
import "../App.css";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchOrders = async () => {
    setLoading(true);
    setError(""); // Reset previous errors
    try {
      // Simulate fetching data (you would replace this with your API call)
      const fetchedOrders = [
        { name: "John Doe", phone: "1234567890", items: [{ name: "Pizza", quantity: 1, price: 10 }] },
        { name: "Jane Smith", phone: "9876543210", items: [{ name: "Burger", quantity: 2, price: 8 }] },
      ];
      const filteredOrders = fetchedOrders.filter((order) => order.phone === phone);

      if (filteredOrders.length === 0) {
        setError("No orders found for this phone number.");
      }
      setOrders(filteredOrders);
    } catch (err) {
      setError("Failed to fetch orders. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="order-history-container">
      <h2 className="heading">Order History</h2>
      <div className="search-container">
        <label htmlFor="phone" className="input-label">
          Phone Number:
        </label>
        <input
          id="phone"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone number"
          className="input-field"
        />
        <button onClick={fetchOrders} className="search-button">
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      {error && <p className="error-message">{error}</p>}

      {orders.length > 0 ? (
        <div className="orders-list">
          {orders.map((order, index) => (
            <div key={index} className="order-item">
              <h3 className="order-name">Order by {order.name} ({order.phone})</h3>
              <ul className="order-details">
                {order.items.map((item, i) => (
                  <li key={i} className="order-item-details">
                    {item.name} x{item.quantity} - ₹{item.price * item.quantity}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        !loading && <p>No orders found for this phone number.</p>
      )}
    </div>
  );
};

export default OrderHistory;
