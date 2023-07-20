import React, { useEffect, useState } from 'react';
import NotFound from '../404/404';
import logements from '../../datas/logements'
//import Banner from '../../composants/Banner'
import './article.css'
import CareScale from '../../composants/CareScale';
import Carousel from '../../composants/carroussel/carroussel';
import Tags from '../../composants/tags/tags'
import Dropdown from '../../composants/dropdown/dropdown'

function Article(){
    const [logement, setLogement] = useState(null);

  useEffect(() => {
    // Récupérer l'ID depuis le "query string" de l'URL
    const urlSearchParams = new URLSearchParams(window.location.search);
    const id = urlSearchParams.get('id');

    const logementTrouve = logements.find((logement) => logement.id === id);
    setLogement(logementTrouve);
  }, []);

  //Si pas de logement page404
  if(!logement){
    return ( <NotFound/>  )
  }
  
    // Afficher les informations du logement trouvé
    return (
      <section className='contenu'>
        <Carousel items={logement.pictures}/>
        <div className='headerArticle'>
          <section className='logement'>
            <h1>{logement.title}</h1>
            <p className='location'>{logement.location}</p>
            <Tags tags={logement.tags}/>
          </section>
          <aside className='proprietaire'>
            <div className='infoProprietaire'>
              <p>{logement.host.name}</p>
              <img className='picture' src={logement.host.picture} alt='propriétaire'/>
            </div>
          <CareScale rating={logement.rating}/>
          </aside>
        </div>
        <div className='dropdown'> 
          <Dropdown dropdown={logement.description} titre='Description'/>
          <Dropdown dropdown={logement.equipments} titre='Equipement'/>
        </div>
        
      </section>
      
    );
  };

export default Article

