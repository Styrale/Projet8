import React from 'react';
import './notfound.scss'
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='notfound-page'>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/"
                className='active'>Retourner sur la page d'acceuil</NavLink>
    </div>
  );
};

console.log(NotFound)

export default NotFound;