import axios from 'axios';

const API_URL = '/api'; // Example base URL for backend APIs

export const getReports = async () => {
  return await axios.get(`${API_URL}/reports`);
};

export const postLogin = async (email, password) => {
  return await axios.post(`${API_URL}/login`, { email, password });
};
