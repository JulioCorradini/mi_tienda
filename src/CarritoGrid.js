// ProductGrid.js
import React from 'react';
import './CarritoGrid.css';

const CarritoGrid = ({ products, quitarProductoDelCarrito }) => {

  return (
    <div className="carrito-grid">
      {products.map(product => (
        <div key={product.id} className="product" onClick={() => quitarProductoDelCarrito(product)}>
          <img src={product.image} alt={product.name} />
          <p>{product.name}</p>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default CarritoGrid;
