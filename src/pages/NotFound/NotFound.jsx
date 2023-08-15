import React from 'react';
import Navigation from '../../components/Navigation/Navigation';

const NotFound = () => {
  return (
    <div>
      <Navigation />
      <h1>Page non trouvée</h1>
      <p>Désolé, la page que vous recherchez n'existe pas.</p>
    </div>
  );
};

export default NotFound;