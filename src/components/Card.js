// Import de divers composants
import React from 'react';
import '../styles/Card.css';


// Création des cards
const Card = ({ title }) => {
  return (
    <div className="card">
      <p>{title}</p>
    </div>
  );
};

export default Card;