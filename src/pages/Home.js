// Import de divers composants
import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import BannerImage1 from '../assets/banner.png';

// Création de la page d'accueil
const Home = () => {
  const cards = Array(6).fill().map((_, i) => <Card key={i} title="Titre de la location" />);

  return (
    <div>
      <Banner imageUrl={BannerImage1} text="Chez vous, partout et ailleurs" />
      <div className="container">
        {cards}
      </div>
    </div>
  );
};

export default Home;