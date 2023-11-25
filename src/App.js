// App.js
//import React from 'react';
import React, { useState } from 'react';
import Navbar from './Navbar';
//import ProductGrid from './ProductGrid';
import ProductsSection from './ProductsSection';
import ContactSection from './ContactSection';
import InitSection from './InitSection'
import './App.css';

const products = [
  { id: 1, name: 'Producto 1', price: 20, image: 'url-de-la-imagen-1.jpg'},
  { id: 2, name: 'Producto 2', price: 30, image: 'url-de-la-imagen-2.jpg' },
  { id: 2, name: 'Producto 2', price: 30, image: 'url-de-la-imagen-2.jpg' },
  { id: 2, name: 'Producto 2', price: 30, image: 'url-de-la-imagen-2.jpg' },
  { id: 2, name: 'Producto 2', price: 30, image: 'url-de-la-imagen-2.jpg' }
  // Agrega más productos según sea necesario
];

function App() {
  
  const [activeSection, setActiveSection] = useState('Inicio');

  const renderSection = () => {
    switch (activeSection) {
      case 'Productos':
        return <ProductsSection products={products} />;
      case 'Contacto':
        return <ContactSection />;
      case 'Inicio':
        return <InitSection />;
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

