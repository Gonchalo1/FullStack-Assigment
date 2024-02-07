import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/auth/login', { email, password });
      console.log('Respuesta del servidor:', response.data);
      // Aquí puedes manejar la respuesta del servidor, como redirigir al usuario a otra página
    } catch (error) {
      console.error('Error de inicio de sesión:', error);
      // Aquí puedes manejar el error, como mostrar un mensaje al usuario
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
      <Link to={"./register"}>Registrate</Link>
    </div>
  );
};

export default Login;
