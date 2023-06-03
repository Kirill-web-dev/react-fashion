import React from "react";

const Card = ({ imagePath, text }) => {
  return (
    <div className="card">
      <div className="card__img">
        <img
          src={imagePath}
          alt=""
        />
      </div>
      <h3>{text}</h3>
      <p>Explore Now!</p>
      <img
        className="card__arrow"
        src="./icons/Arrow.svg"
        alt=""
      />
    </div>
  );
};

export default Card;
