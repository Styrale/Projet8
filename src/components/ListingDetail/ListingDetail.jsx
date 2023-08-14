import React from 'react';
import './ListingDetail.scss';
import { useParams } from 'react-router-dom';

const ListingDetail = () => {
  const { id } = useParams();

  // Exemple de données d'une annonce spécifique
  const listing = {
    id: 1,
    title: 'Appartement moderne en centre-ville',
    description: 'Bel appartement récemment rénové...',
    price: '1000€',
    bedrooms: 2,
    bathrooms: 1,
    // Ajoutez plus de détails d'annonce ici...
  };

  return (
    <div className="ListingDetail">
      <h1>{listing.title}</h1>
      <p>Prix : {listing.price}</p>
      <p>Chambres : {listing.bedrooms}</p>
      <p>Salle de bains : {listing.bathrooms}</p>
      <p>Description : {listing.description}</p>
      {/* Ajoutez plus d'informations ici... */}
    </div>
  );
};

export default ListingDetail;