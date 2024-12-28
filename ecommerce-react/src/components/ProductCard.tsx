import React from 'react';
import { Product } from '../types/product';
import { useCart } from '../context/CarrelloContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="col">
      <div className="card h-100">
        <img 
          src={product.image} 
          className="card-img-top" 
          alt={product.title}
          style={{ height: '200px', objectFit: 'contain' }}
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">
            <strong>€{product.price.toFixed(2)}</strong>
          </p>
          <button className="btn btn-primary" onClick={() => addToCart(product)}>
            Aggiungi al carrello
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;