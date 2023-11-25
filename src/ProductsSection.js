import React from 'react';
import ProductGrid from './ProductGrid';
import './Sections.css';  // Importa el archivo de estilos

const ProductsSection = ({ products }) => {
  return (
    <div className="section-container fade-in">
      <h2>Productos</h2>
      <ProductGrid products={products} />
    </div>
  );
}

export default ProductsSection;
