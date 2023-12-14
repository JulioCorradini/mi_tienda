// Navbar.js
//import React from 'react';
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ setActiveSection }) => {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  return (
    <div /*className="navbar"*/ className={`navbar ${menuOpen ? 'open' : ''}`}>
      <button onClick={handleToggleMenu} className="menu-button">
        ☰
      </button>
      {menuOpen && (
        <ul>
          <li onClick={() => handleSectionClick('Inicio')}>Inicio</li>
          <li onClick={() => handleSectionClick('Productos')}>Productos</li>
          <li onClick={() => handleSectionClick('Contacto')}>Contacto</li>
          <li onClick={() => handleSectionClick('Carrito')}>Mi Carrito</li>
          {/* Agrega más elementos del menú según sea necesario */}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
