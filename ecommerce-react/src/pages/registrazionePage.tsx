import React, { useState } from 'react';
import axios from 'axios';

const RegisterPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleRegister = async (e: React.FormEvent) => {
    console.log(firstName, lastName, email, password);
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
        const response = await axios.post('http://localhost:3000/api/auth/register', {
        firstName,
        lastName,
        email,
        password
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log(response.data);
      }
      catch (err: any) {
        setError(err.message);
      }
  };

  return (
    <div className="container mt-4">
      <h1>Registrati</h1>
      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">Nome</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Cognome</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
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
        {success && <div className="alert alert-success">{success}</div>}
        <button type="submit" className="btn btn-primary">Registrati</button>
      </form>
    </div>
  );
};

export default RegisterPage;