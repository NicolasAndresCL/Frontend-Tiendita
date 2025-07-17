import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Listar historial de órdenes del usuario (con paginación y filtros)
export const getOrdenes = async (token, params = {}) => {
  const response = await axios.get(`${API_BASE_URL}/api/ordenes/`, {
    headers: { Authorization: `Bearer ${token}` },
    params,
  });
  return response.data;
};

// Ver detalle de una orden específica
export const getOrdenDetalle = async (ordenId, token) => {
  const response = await axios.get(`${API_BASE_URL}/api/ordenes/${ordenId}/`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
