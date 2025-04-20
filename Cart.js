// src/components/Cart.js
import React from 'react';
import { useCart } from '../context/CartContext';
import "../App.css";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-details">
                <p className="cart-item-name">{item.name}</p>
                <p className="cart-item-price">₹{item.price}</p>
              </div>
              <button 
                className="remove-item-button" 
                onClick={() => removeFromCart(item.id)} // Ensure correct ID is passed here
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <button className="clear-cart-button" onClick={clearCart}>
          Clear Cart
        </button>
      )}
    </div>
  );
};

export default Cart;
