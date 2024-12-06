import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <a href="/" className="logo">Navbar</a>
      <ul className="">
        <li><a href="#">A propos</a></li>
        <li><a href="#">Mes Travaux</a></li>
        <li><a href="#">Projets</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Me contacter</a></li>
      </ul>

      {/* Choix de la langue */}
      <p>Français</p>
    </div>
  );
};

export default Navbar;