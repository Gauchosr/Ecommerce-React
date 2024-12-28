import React from 'react';
import { useCart } from '../context/CarrelloContext';

const CartPage = () => {
  const { cart, removeFromCart, checkout, getTotalPrice } = useCart();

  return (
    <div className="container mt-5">
      <h1>Il tuo Carrello</h1>
      {cart.length === 0 ? (
        <p>Il carrello è vuoto.</p>
      ) : (
        <>
          <ul className="list-group">
            {cart.map(item => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <img src={item.image} alt="Product Image" style={{ width: '50px', height: '50px', objectFit: 'contain', marginRight: '10px' }} />
                <div>
                  <h5>{item.title}</h5>
                  <p>Prezzo: €{(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>
                  Rimuovi
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-3">
            <h4>Totale: €{getTotalPrice().toFixed(2)}</h4>
          </div>
          <button className="btn btn-secondary mt-3" onClick={checkout}>
            Procedi all'ordine
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;