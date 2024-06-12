// Import de divers composants
import React from 'react';
import '../styles/Header.css';


// Création du header
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={require('../assets/logo.png').default} alt="Kasa" />
      </div>
      <nav>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/aPropos">A Propos</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;