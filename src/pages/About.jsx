// Import de divers composants
import Banner from '../components/Banner';
import '../styles/About.css';
import BannerImage2 from '../assets/banner2.png';
import Collapse from '../components/Collapse'

// Création de la page A Propos
const About = () => {

  return (
    <div className="apropos-container">
      <Banner imageUrl={BannerImage2} text="" />
      <div className="apropos-content">
        <div className="accordeon"> 
          <Collapse title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>

          <Collapse title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>

          <Collapse title="Service" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>

          <Collapse title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l’hôte qu’au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
        </div>
      </div>
    </div>
  );
};

export default About;