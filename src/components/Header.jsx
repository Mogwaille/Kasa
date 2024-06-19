// Import de divers composants
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

// Création du header
const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="logo">
        <img src={require('../assets/logo.png').default} alt="Kasa" />
      </div>
      <nav>
        <ul>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Accueil</Link></li>
          <li><Link to="a-propos" className={location.pathname === '/a-propos' ? 'active' : ''}>A propos</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;