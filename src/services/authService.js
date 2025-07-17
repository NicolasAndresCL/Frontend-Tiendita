import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Servicio para login con JWT
export const login = async (username, password) => {
  const response = await axios.post(`${API_BASE_URL}/api/token/`, {
    username,
    password,
  });
  return response.data; // { access, refresh }
};
