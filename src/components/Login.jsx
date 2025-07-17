import React, { useState } from 'react';
import { login } from '../services/authService';

const Login = ({ onLogin, onSwitchToRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const data = await login(username, password);
      localStorage.setItem('token', data.access);
      if (onLogin) onLogin(data.access);
    } catch {
      setError('Usuario o contraseña incorrectos');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-center text-pink-700">Iniciar sesión</h2>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-4 px-3 py-2 border rounded text-gray-800 placeholder-gray-500 bg-pink-50"
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-3 py-2 border rounded text-gray-800 placeholder-gray-500 bg-pink-50"
          required
        />
        {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
        <button
          type="submit"
          className="w-full bg-pink-400 text-white font-semibold py-2 rounded hover:bg-pink-500 transition"
          disabled={loading}
        >
          {loading ? 'Ingresando...' : 'Ingresar'}
        </button>
        <button
          type="button"
          className="w-full text-pink-600 underline mt-2 font-semibold"
          onClick={onSwitchToRegister}
        >
          ¿No tienes cuenta? Regístrate
        </button>
      </form>
    </div>
  );
};

export default Login;
