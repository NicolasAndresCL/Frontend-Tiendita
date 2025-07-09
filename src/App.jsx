import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import React from 'react';
// Importa tu nuevo componente ProductoCard
import ProductoCard from './components/ProductoCard'; // Ajusta la ruta si es diferente, ej. './ProductoCard'

function App() {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/productos/`);
        console.log("✅ Respuesta de la API:", response.data);
        setProductos(response.data);
      } catch (err) {
        setError('No se pudieron cargar los productos');
        console.error("❌ Error al hacer fetch:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  console.log("📦 Estado actual de productos:", productos);

  if (loading) return <div>Cargando productos...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">🛍️ Tiendita de Marian</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productos.map((producto) => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
}

export default App;