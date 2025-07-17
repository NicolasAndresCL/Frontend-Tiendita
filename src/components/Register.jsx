import React, { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Register = ({ onRegister, onSwitchToLogin }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    if (password !== password2) {
      setError('Las contraseñas no coinciden');
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API_BASE_URL}/api/register/`, {
        username,
        email,
        password,
      });
      setSuccess(true);
      if (onRegister) onRegister();
    } catch {
      setError('No se pudo registrar el usuario. Intenta con otro nombre o email.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-center text-pink-700">Crear cuenta</h2>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-4 px-3 py-2 border rounded text-gray-800 placeholder-gray-500 bg-pink-50"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <input
          type="password"
          placeholder="Repetir contraseña"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          className="w-full mb-4 px-3 py-2 border rounded text-gray-800 placeholder-gray-500 bg-pink-50"
          required
        />
        {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
        {success && <div className="text-green-600 mb-4 text-center">¡Registro exitoso! Ahora puedes iniciar sesión.</div>}
        <button
          type="submit"
          className="w-full bg-pink-400 text-white font-semibold py-2 rounded hover:bg-pink-500 transition mb-2"
          disabled={loading}
        >
          {loading ? 'Registrando...' : 'Registrarse'}
        </button>
        <button
          type="button"
          className="w-full text-pink-600 underline font-semibold"
          onClick={onSwitchToLogin}
        >
          ¿Ya tienes cuenta? Inicia sesión
        </button>
      </form>
    </div>
  );
};

export default Register;
