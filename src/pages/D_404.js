// Import de divers composants
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/D_404.css';


// Création de la page 404
const D_404 = () => {
  return (
    <div className="D_404-content">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
};

export default D_404;