import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; // Make sure to create this file too

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">🍽️ FoodieApp</div>
      <div className="nav-links">
        <Link to="/">Menu</Link>
        <Link to="/cart">Order</Link>
        <Link to="/order-history">Order History</Link>
      </div>
    </nav>
  );
};

export default Navbar;
