// Import de divers composants
import React, { useState, useEffect } from 'react';
import logements from '../datas/Logements.json';
import { useParams } from 'react-router-dom';
import icon from "../assets/icon.png";
import "../styles/Carrousel.css";


// Création du carrousel
function Carousel() {
    const { id } = useParams();
    const logement = logements.find(logement => logement.id === id);
    const [imageCarousel, setImageCarousel] = useState(0);

    useEffect(() => {
        setImageCarousel(0);
    }, [id]);

    if (!logement) {
        return <div>Logement non trouvé</div>;
    }

    const {pictures} = logement;

    const btnNext = () => {
        setImageCarousel((prevIndex) => (prevIndex + 1) % pictures.length);
    }

    const btnPrev = () => {
        setImageCarousel((prevIndex) => prevIndex === 0 ? pictures.length - 1 : prevIndex - 1);
    }

    return (
        <div className="carousel">
            <img src={pictures[imageCarousel]} alt={logement.title} />
            {(pictures.length > 1) &&
                <>
                    <button className="button prev" onClick={btnPrev}>
                        <img src={icon} alt="Précédent" />
                    </button>
                    <button className="button next" onClick={btnNext}>
                        <img src={icon} alt="Suivant" />
                    </button>
                    <p className="count">{imageCarousel + 1}/{pictures.length}</p>
                </>
            }
        </div>
    )
}

export default Carousel;