import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const OrderForm = ({ placeOrder }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const { cart } = useCart();

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = { name, phone, items: cart };
    placeOrder(order);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Place Your Order</h2>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Phone:
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </label>
      <button type="submit">Place Order</button>
    </form>
  );
};

export default OrderForm;
