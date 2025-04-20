import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import OrderForm from "./components/OrderForm";
import OrderHistory from "./components/OrderHistory";
import Navbar from "./components/Navbar"; // already includes links

const App = () => {
  const menuItems = [
    { name: "Pizza", description: "Cheese Pizza", price: 10 },
    { name: "Burger", description: "Beef Burger", price: 8 },
    { name: "Pasta", description: "Spaghetti with marinara", price: 12 },
  ];

  const [orders, setOrders] = useState([]);

  const placeOrder = (order) => {
    setOrders((prevOrders) => [...prevOrders, order]);
    alert("Order placed successfully!");
  };

  return (
    <Router>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Menu menuItems={menuItems} />} />
          <Route
            path="/cart"
            element={
              <>
                <Cart />
                <OrderForm placeOrder={placeOrder} />
              </>
            }
          />
          <Route path="/order-history" element={<OrderHistory orders={orders} />} />
        </Routes>
      </CartProvider>
    </Router>
  );
};

export default App;
