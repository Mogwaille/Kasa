// Import de divers composants
import React from 'react';
import '../styles/Footer.css';
import logo from '../assets/logo2.png';


// Création du footer
const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <img src={logo} alt="Logo de Kasa" />
      </div>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;