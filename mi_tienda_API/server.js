const express = require('express');
const cors = require('cors'); // Para permitir solicitudes desde el navegador

const app = express();
const port = 3001;

app.use(cors());

const products = [
  { id: 1, name: 'Producto 1', price: 20, image: 'url-de-la-imagen-1.jpg' },
  { id: 2, name: 'Producto 2', price: 30, image: 'url-de-la-imagen-2.jpg' },
  { id: 3, name: 'Producto 3', price: 30, image: 'url-de-la-imagen-2.jpg' },
  { id: 4, name: 'Producto 4', price: 30, image: 'url-de-la-imagen-2.jpg' },
  { id: 5, name: 'Producto 5', price: 30, image: 'url-de-la-imagen-2.jpg' }
  // Agrega más productos según sea necesario
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});
