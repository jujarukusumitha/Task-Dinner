import React from "react";
import { useCart } from "../context/CartContext";
import "../App.css";

const Menu = () => {
  const { addToCart } = useCart();

  const menuItems = [
    { name: "Pizza", description: "Cheese Pizza", price: 10 },
    { name: "Burger", description: "Beef Burger", price: 8 },
    { name: "Pasta", description: "Spaghetti with marinara", price: 12 },
    { name: "Fries", description: "Crispy French Fries", price: 5 },
    { name: "Tacos", description: "Mexican Tacos with Salsa", price: 9 },
    { name: "Salad", description: "Fresh Green Salad", price: 7 },
    { name: "Sushi", description: "Classic Tuna Sushi Rolls", price: 15 },
    { name: "Sandwich", description: "Grilled Chicken Sandwich", price: 8 },
    { name: "Steak", description: "Grilled Ribeye Steak", price: 18 },
    { name: "Ice Cream", description: "Vanilla Ice Cream with Chocolate Syrup", price: 4 },
    { name: "Coffee", description: "Hot brewed coffee", price: 3 },
    { name: "Milkshake", description: "Strawberry milkshake with cream", price: 6 },
    { name: "Nachos", description: "Nachos with cheese dip", price: 6 },
    { name: "Chicken Wings", description: "Spicy buffalo wings", price: 11 },
    { name: "Paneer Tikka", description: "Indian grilled paneer cubes", price: 9 },
    { name: "Spring Rolls", description: "Veg crispy spring rolls", price: 5 },
  ];

  return (
    <div className="menu-container">
      <h2>Menu</h2>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>${item.price}</p>
            <button onClick={() => addToCart({ ...item, quantity: 1 })}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
