// Import de divers composants
import React from 'react';
import '../styles/Banner.css';


// Création de la bannière
const Banner = ({ imageUrl, text }) => {
  return (
    <div className="banner-container">
      <div className="banner" style={{ backgroundImage: `url(${imageUrl})` }}>
        <h1>{text}</h1>
      </div>
    </div>
  );
};

export default Banner;