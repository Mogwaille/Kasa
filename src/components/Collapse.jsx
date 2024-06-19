import React, { useState } from 'react'; // Permet de gérer l'état local
import Icon from '../assets/icon.png';

function Collapse({ title, content, index }){
    // Permet de gérer les éléments de l'accordéon qui sont ouverts
    const [activeIndexes, setActiveIndexes] = useState([]);

    // Fonction ajoutant ou supprimant un index de la liste au click sur un accordéon
    const ouvrirAccordeon = index => {
        setActiveIndexes(prevActiveIndexes =>
        prevActiveIndexes.includes(index) ? prevActiveIndexes.filter(i => i !== index) : [...prevActiveIndexes, index]
        );
    };
    
    return(
        <div className={`accordeon-item ${activeIndexes.includes(index) ? 'active' : ''}`} key={index}>
            <h2 className="accordeon-header" onClick={() => ouvrirAccordeon(index)}>
                {title}
                <span>
                    <img src={Icon} alt="Icône d'ouverture" className={`icon ${activeIndexes.includes(index) ? 'open' : ''}`}/>
                </span>
            </h2>
            <div className={`accordeon-body ${activeIndexes.includes(index) ? 'active' : ''}`}>
                {content}
            </div>
        </div>
    )
}

export default Collapse;