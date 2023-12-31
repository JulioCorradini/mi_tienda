// ProductGrid.js
import React from 'react';
import './ProductGrid.css';

const ProductGrid = ({ products, agregarProductoAlCarrito }) => {

  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product" onClick={() => agregarProductoAlCarrito(product)}>
          <img src={product.image} alt={product.name} />
          <p>{product.name}</p>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;
