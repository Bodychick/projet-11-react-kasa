import React, { useEffect, useState } from 'react';
import logements from '../../datas/logements'
//import Banner from '../../composants/Banner'
import './article.css'
import CareScale from '../../composants/CareScale';
import Carousel from '../../composants/carroussel/carroussel';

function Article(){
    const [logement, setLogement] = useState(null);

  useEffect(() => {
    // Récupérer l'ID depuis le "query string" de l'URL
    const urlSearchParams = new URLSearchParams(window.location.search);
    const id = urlSearchParams.get('id');

    // Mettre à jour l'état avec le logement trouvé (par exemple à partir de logementsData)
    // Assurez-vous d'avoir la logique pour récupérer les données de logementsData
    const logementTrouve = logements.find((logement) => logement.id === id);
    setLogement(logementTrouve);
  }, []);

  //Si pas de logement chargement
  if(!logement){
    return (<div>chargement ...</div>)
  }
  
    // Afficher les informations du logement trouvé
    return (
      <section className='contenu'>
        <Carousel items={logement.pictures}/>
        <div className='headerArticle'>
          <section className='logement'>
            <h1>{logement.title}</h1>
            <p className='location'>{logement.location}</p>
          </section>
          <aside className='proprietaire'>
            <div className='infoProprietaire'>
              <p>{logement.host.name}</p>
              <img className='picture' src={logement.host.picture} alt='propriétaire'/>
            </div>
          <CareScale rating={logement.rating}/>
          </aside>
        </div>
      </section>
      
    );
  };

export default Article

