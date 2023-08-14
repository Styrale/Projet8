import React from "react";
import './thumbnails.scss'

const Thumbnails = ({ image, title }) => {
  return (
    <div className="thumb">
      <img src={image} alt="" className="thumb-img" />
      <div className="thumb-overlay"></div>
      <h2 className="thumb-title">{title}</h2>
    </div>
  );
};

export default Thumbnails;
