import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { useCart } from '../context/CarrelloContext'; // Importa il contesto del carrello
import { useGeneral } from '../context/GeneralContext';


const Navbar = () => {
    const { cart } = useCart(); // Usa il contesto per ottenere il carrello
    const { isLoggedIn } = useGeneral();
    const [user, setUser] = useState<{ nome: string; cognome: string } | null>(null);
    useEffect(() => {
        if (isLoggedIn) {
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        } else {
            setUser(null);
        }
    }, [isLoggedIn]);

    return (
      <nav className="navbar navbar-dark bg-primary fixed-top">
        <div className="container-fluid">
          <Link className="nav-link" to="/homepage">
          <div className="navbar-brand d-flex align-items-center">E-commerce</div>
          </Link>
          <div className="d-flex align-items-center">
            <Link className="nav-link" to="/carrello">
            <button className="navbar-toggler position-relative" type="button" aria-label="Carrello">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
            </svg>
            {cart.length > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">items in cart</span>
              </span>
            )}
            </button>
            </Link>
            {isLoggedIn && user ? (
              <span className="nav-link text-white">
              {user.nome} {user.cognome}
            </span>) : (
            <Link className="nav-link" to="/login">
            <button className="btn btn-outline-light">Login</button>
            </Link>)}
            </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;