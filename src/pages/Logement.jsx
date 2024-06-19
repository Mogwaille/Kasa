// Import de divers composants
import React from 'react';
import { useParams } from 'react-router-dom';
import logements from '../datas/Logements.json';
import Collapse from '../components/Collapse';
import '../styles/Logement.css';


// Création des pages des logements
function Logement() {
  const { id } = useParams();
  const logement = logements.find(logement => logement.id === id);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div className="logement-container">
      <div className="logement-header">
        <img src={logement.cover} alt={logement.title} />
      </div>
      <div className="logement-content">
        <div className="logement-info">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <div className="logement-tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>
        <div>
          <div className="logement-host">
            <p>{logement.host.name}</p>
            <img className="host-picture" src={logement.host.picture} alt={logement.host.name} />
          </div>
          <div className="logement-rating">
            {Array.from({ length: 5 }, (v, i) => (
              <span key={i} className={`star ${i < logement.rating ? 'filled' : ''}`}>&#9733;</span>
            ))}
          </div>
        </div>
      </div>
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