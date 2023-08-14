import React from "react";
import './banner.scss'

const Banner = ({ image, title }) => {
    return (
      <div className="banner">
        <img src={image} alt="Photo d'un paysage" className="img_header" />
        <div className="catchphrase">
        <h2>{title}</h2>
        </div>
      </div>
    );
  };
  

export default Banner