// Import de divers composants
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Error.css';


// Création de la page Error
const Error = () => {
  return (
    <div className="error-content">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
};

export default Error;