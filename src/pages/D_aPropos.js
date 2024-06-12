// Import de divers composants
import React, { useState } from 'react'; // Permet de gérer l'état local
import Banner from '../components/Banner';
import '../styles/D_aPropos.css';
import BannerImage2 from '../assets/banner2.png';
import Icon from '../assets/icon.png';


// Création de la page A Propos
const D_aPropos = () => {
  // Permet de gérer les éléments de l'accordéon qui sont ouverts
  const [activeIndexes, setActiveIndexes] = useState([]);

  // Fonction ajoutant ou supprimant un index de la liste au click sur un accordéon
  const ouvrirAccordeon = index => {
    setActiveIndexes(prevActiveIndexes =>
      prevActiveIndexes.includes(index) ? prevActiveIndexes.filter(i => i !== index) : [...prevActiveIndexes, index]
    );
  };

  return (
    <div className="apropos-container">
      <Banner imageUrl={BannerImage2} text="" />
      <div className="apropos-content">
        <div className="accordeon"> 
          {accordeonData.map((item, index) => (
            <div className={`accordeon-item ${activeIndexes.includes(index) ? 'active' : ''}`} key={index}>
              <h2 className="accordeon-header" onClick={() => ouvrirAccordeon(index)}>
                {item.title}
                <span>
                  <img src={Icon} alt="Icône d'ouverture" className={`icon ${activeIndexes.includes(index) ? 'open' : ''}`}/>
                </span>
              </h2>
              <div className={`accordeon-body ${activeIndexes.includes(index) ? 'active' : ''}`}>
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


// Déclaration des données de l'accordéon
const accordeonData = [
  {
    title: 'Fiabilité',
    content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
  },
  {
    title: 'Respect',
    content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
  },
  {
    title: 'Service',
    content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
  },
  {
    title: 'Sécurité',
    content: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l’hôte qu’au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'
  }
];

export default D_aPropos;