import React, { useEffect, useState } from 'react';
import logements from '../../datas/logements'
import Banner from '../../composants/Banner'
import bannerImage from '../../assets/lake-checrouit.jpg'
import { useParams } from 'react-router-dom'

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

  // Vérifier si le logement a été trouvé ou non
  if (!logement) {
    return <div>Chargement...</div>;
  }
  
    // Afficher les informations du logement trouvé
    return (
      <div>
        <Banner lien={logement.cover} />
        <h1>{logement.title}</h1>
        <p>{logement.description}</p>
      </div>
    );
  };
  

export default Article

