import React from 'react';
import ProductGrid from './ProductGrid';

const CarritoSection = ({ products }) => {
  return (
    <div className="section-container fade-in">
      <h2>Mi Carrito</h2>
      <ProductGrid products={products} />
    </div>
  );
}

export default CarritoSection;