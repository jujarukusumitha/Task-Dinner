const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  cartItems: [
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Order', orderSchema);
