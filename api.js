import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api'; // change if backend is deployed

export const fetchMenuItems = async () => {
  const res = await axios.get(`${BASE_URL}/menu`);
  return res.data;
};

export const placeOrder = async (orderData) => {
  const res = await axios.post(`${BASE_URL}/orders`, orderData);
  return res.data;
};
