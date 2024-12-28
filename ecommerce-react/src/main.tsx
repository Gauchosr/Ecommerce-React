import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './context/CarrelloContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { GeneralProvider } from './context/GeneralContext';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
    <GeneralProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </GeneralProvider>
    </Router>
  </React.StrictMode>
);
