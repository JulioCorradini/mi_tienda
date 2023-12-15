import React from 'react';
import ProductGrid from './ProductGrid';
import './Sections.css';  // Importa el archivo de estilos

const ProductsSection = ({ products, agregarProductoAlCarrito }) => {

  return (
    <div className="section-container fade-in">
      <h2>Productos</h2>
      <ProductGrid products={products} agregarProductoAlCarrito={agregarProductoAlCarrito}/>
    </div>
  );
}

export default ProductsSection;
