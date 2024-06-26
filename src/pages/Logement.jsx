// Import de divers composants
import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logements from '../datas/Logements.json';
import Collapse from '../components/Collapse';
import Carrousel from '../components/Carrousel';
import Profil from '../components/Profil';
import '../styles/Logement.css';

// Création des pages des logements
function Logement() {
  const { id } = useParams();
  const logement = logements.find(logement => logement.id === id);

  if (!logement) {
    return <div className="error-content">
              <h1>404</h1>
              <p>Logement non trouvé</p>
              <Link to="/">Retourner sur la page d'accueil</Link>
           </div>;
  }

  return (
    <div className="logement-container">
      <Carrousel />
      <Profil logement={logement} />
      <div className="logement-collapse">
        <div className="collapse">
          <Collapse title="Description" content={<p>{logement.description}</p>} index={0} />
        </div>
        <div className="collapse">
          <Collapse title="Équipements" content={<ul>{logement.equipments.map((equipment, index) => <li key={index}>{equipment}</li>)}</ul>} index={1} />
        </div>
      </div>
    </div>
  );
}

export default Logement;