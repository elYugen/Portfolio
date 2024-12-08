import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <a href="/" className="logo">Yugen</a>

      <div className="burger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to="about">A propos</Link></li>
        <li><a href="#">Mes Travaux</a></li>
        <li><a href="#">Projets</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Me contacter</a></li>
      </ul>

      {/* Choix de la langue */}
      <p className='language'>Français</p>
    </div>
  );
};

export default Navbar;