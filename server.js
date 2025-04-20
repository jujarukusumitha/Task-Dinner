const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const MenuItem = require('./models/MenuItem');
const Order = require('./models/Order');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Routes
app.get('/api/menu', async (req, res) => {
  try {
    const items = await MenuItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch menu items' });
  }
});

app.post('/api/orders', async (req, res) => {
  const { name, phone, cartItems } = req.body;
  try {
    const newOrder = new Order({ name, phone, cartItems });
    await newOrder.save();
    res.status(201).json({ message: 'Order placed successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to place order' });
  }
});

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
