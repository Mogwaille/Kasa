// Création du profil
function Profil({ logement }){
    return(
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
    )
}

export default Profil;