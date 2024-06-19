// Import de divers composants
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Card.css';


// Création des cards
function Card({ id, title, cover }) {
  return (
    <div className="card">
      <Link to={`/logement/${id}`} className="card-link">
      <img src={cover} alt={title} />
      <div className="card-content">
          <p>{title}</p>
      </div>
      </Link>
    </div>
  );
}

export default Card;