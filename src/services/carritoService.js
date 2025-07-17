import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Obtener el carrito actual del usuario
export const getCarrito = async (token) => {
  const response = await axios.get(`${API_BASE_URL}/api/carrito/`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Agregar producto/cantidad al carrito
export const addToCarrito = async (producto_id, cantidad, token) => {
  const response = await axios.post(
    `${API_BASE_URL}/api/carrito/add/`,
    { producto_id, cantidad },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};

// Eliminar producto del carrito
export const removeFromCarrito = async (producto_id, token) => {
  const response = await axios.post(
    `${API_BASE_URL}/api/carrito/remove/`,
    { producto_id },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};

// Vaciar el carrito
export const clearCarrito = async (token) => {
  const response = await axios.post(
    `${API_BASE_URL}/api/carrito/clear/`,
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};

// Actualizar cantidad de un producto en el carrito
export const updateCantidadCarrito = async (producto_id, cantidad, token) => {
  const response = await axios.post(
    `${API_BASE_URL}/api/carrito/update-cantidad/`,
    { producto_id, cantidad },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};

// Checkout: crear una orden a partir del carrito
export const checkout = async (token) => {
  const response = await axios.post(
    `${API_BASE_URL}/api/checkout/`,
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};
