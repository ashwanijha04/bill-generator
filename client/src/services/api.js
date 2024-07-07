import axios from 'axios';

const API_URL = 'http://localhost:8081/api/items';

export const addItem = async (item) => {
  return await axios.post(`${API_URL}/add-item`, item);
};

export const getItems = async () => {
  return await axios.get(`${API_URL}/get-items`);
};

export const getBillById = async (id) => {
  return await axios.get(`${API_URL}/get-item/${id}`);
};
