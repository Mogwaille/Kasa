// Import de divers composants
import React from 'react';
import Banner from '../components/Banner';
import BannerImage1 from '../assets/banner.png';
import logements from '../datas/Logements.json';
import Card from '../components/Card';
import '../styles/App.css';


// Création de la page Home
function Home() {
  return (
    <div className="App">
      <Banner imageUrl={BannerImage1} text="Chez vous, partout et ailleurs" />
      <div className="container">
        {logements.map(logement => (
          <Card key={logement.id} id={logement.id} title={logement.title} cover={logement.cover} />
        ))}
      </div>
    </div>
  );
}

export default Home;