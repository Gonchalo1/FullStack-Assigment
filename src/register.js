import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/auth/register', { 
        name: name,
        email: email,
        password: password,
        password_confirmation: confirmPassword
    });
        console.log('Respuesta del servidor:', response.data);
        // Aquí puedes manejar la respuesta del servidor, como redirigir al usuario a otra página
      } catch (error) {
        console.error('Error de inicio de sesión:', error);
        // Aquí puedes manejar el error, como mostrar un mensaje al usuario
      }
    };
  

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
        <div>
          <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
      <Link to={"../"}>Volver atras</Link>
    </div>
  );
};

export default Register;
