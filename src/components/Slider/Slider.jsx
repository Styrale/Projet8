import React from "react";
import { useState } from "react";
import "./slider.scss";
import arrowLeft from "../../assets/arrowLeft.svg";
import arrowRight from "../../assets/arrowRight.svg";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider">
      {slides.map((picture, index) => {
        return (
          <div
            key={index}
            className={index === current ? "active-picture" : ""}
          >
            {index === current && (
              <>
                {length > 1 ? (
                  <span className="slider-pagination">
                    {index + 1}/{length}
                  </span>
                ) : null}
                <img src={picture} alt="" className="slider-picture" />
              </>
            )}
          </div>
        );
      })}
      {}
      {length > 1 ? (
        <>
          <div className="slider-previous" onClick={prevSlide}>
            <img src={arrowLeft} alt="Flèche pointant vers la gauche" />
          </div>
          <div className="slider-next" onClick={nextSlide}>
            <img src={arrowRight} alt="Flèche pointant vers la droite" />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Slider;
