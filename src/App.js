// App.js
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import ProductsSection from './ProductsSection';
import ContactSection from './ContactSection';
import InitSection from './InitSection';
import CarritoSection from './CarritoSection';
import './App.css';

/*const products = [
  { id: 1, name: 'Producto 1', price: 20, image: 'url-de-la-imagen-1.jpg' },
  { id: 2, name: 'Producto 2', price: 30, image: 'url-de-la-imagen-2.jpg' },
  { id: 3, name: 'Producto 3', price: 30, image: 'url-de-la-imagen-2.jpg' },
  { id: 4, name: 'Producto 4', price: 30, image: 'url-de-la-imagen-2.jpg' },
  { id: 5, name: 'Producto 5', price: 30, image: 'url-de-la-imagen-2.jpg' }
  // Agrega más productos según sea necesario
];*/

function App() {
  
  const [activeSection, setActiveSection] = useState('Inicio');
  const [carrito, setCarrito] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchProducts = async ()=>{
    try{
      const response = await fetch ('http://localhost:3001/api/products');
      if (!response.ok){
        throw new Error('Error al obtener los productos de la API')
      }
      const data = await Response.json();
      setProducts = data;
    } catch (error) {
      console.error(error.message);
    };
  };

  useEffect(()=>{
    fetchProducts();
  }, []);

  const agregarProductoAlCarrito = (product) => {
    if (!carrito.includes(product)) {
      setCarrito([...carrito, product]);
    }
    console.log(carrito);
  };

  const quitarProductoDelCarrito = (product) => {
    setCarrito(carrito.filter(item => item !== product));
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'Productos':
        return <ProductsSection products={products} agregarProductoAlCarrito={agregarProductoAlCarrito}/>;
      case 'Contacto':
        return <ContactSection />;
      case 'Inicio':
        return <InitSection />;
      case 'Carrito':
          return <CarritoSection products={carrito} quitarProductoDelCarrito={quitarProductoDelCarrito}/>;
      // Agrega más casos para otras secciones según sea necesario
      default:
        return <div><h2>Inicio</h2><p>Contenido de la sección de Inicio</p></div>;
    }
  };

  return (
    <div className="app">
      <Navbar setActiveSection={setActiveSection} />
      <div className="content">
        {renderSection()}
      </div>
    </div>
  );
}

export default App;

