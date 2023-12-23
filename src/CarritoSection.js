import React from 'react';
import CarritoGrid from './CarritoGrid';

const CarritoSection = ({ products, quitarProductoDelCarrito}) => {
  return (
    <div className="section-container fade-in">
      <h2>Mi Carrito</h2>
      <CarritoGrid products={products} quitarProductoDelCarrito={quitarProductoDelCarrito}/>
      <button className="button-compra" id="button_compra" onClick={()=>console.log("Se apretó el botón")}>Pagar</button>
    </div>
  );
}

export default CarritoSection;