import axios from "axios";

const api = axios.create({
  baseURL: 'https://real-estate-website-0zyr.onrender.com/api',
  withCredentials: true,
});

export default api;