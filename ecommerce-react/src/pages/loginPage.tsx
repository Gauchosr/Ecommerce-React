import React, { useState } from 'react';
import axios from 'axios';
import { useGeneral } from '../context/GeneralContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { setIsLoggedIn } = useGeneral();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', {
        email,
        password
      });
      console.log(response.data);
      if (response.data.status === 'success') {
        setIsLoggedIn(true);
        localStorage.setItem('user', JSON.stringify({nome: response.data.user.nome, cognome: response.data.user.cognome}));
        navigate('/carrello');
      }
    }
    catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="container mt-4">
      <h1>Accedi</h1>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button type="submit" className="btn btn-primary">Accedi</button>
      </form>
    </div>
  );
};

export default LoginPage;