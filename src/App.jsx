import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import React from 'react';
import ProductoCard from './components/ProductoCard';
import TituloCard from './components/TituloCard';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/productos/`);
        setProductos(response.data);
      } catch {
        setError('No se pudieron cargar los productos');
      } finally {
        setLoading(false);
      }
    };
    fetchProductos();
  }, []);

  // Mostrar login/registro modal si el usuario intenta agregar al carrito sin estar autenticado
  if (showLogin && !token) {
    return showRegister ? (
      <Register 
        onRegister={() => setShowRegister(false)}
        onSwitchToLogin={() => setShowRegister(false)}
      />
    ) : (
      <Login 
        onLogin={(tk) => { setToken(tk); setShowLogin(false); }}
        onSwitchToRegister={() => setShowRegister(true)}
      />
    );
  }

  if (loading) return <div>Cargando productos...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <div className="p-8">
      <TituloCard />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productos.map((producto) => (
          <ProductoCard 
            key={producto.id} 
            producto={producto} 
            token={token}
            onRequireLogin={() => setShowLogin(true)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;