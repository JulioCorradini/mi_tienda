/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
// App.js
import React from 'react';
import Navbar from './Navbar';
import ProductGrid from './ProductGrid';
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
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <ProductGrid products={products} />
      </div>
    </div>
  );
}

export default App;

