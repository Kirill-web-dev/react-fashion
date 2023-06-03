import React from "react";
import Card from "./Card";

const cardInfo = [
  {
    imagePath: "./img/01.png",
    text: "Hoodies & Sweetshirt",
  },
  {
    imagePath: "./img/02.png",
    text: "Coats & Parkas",
  },
  {
    imagePath: "./img/03.png",
    text: "Tees & T-Shirt",
  },
];

const Arrivals = () => {
  return (
    <section className="section-arrivals">
      <div className="container">
        <div className="arrivals">
          <div className="arrivals__header">
            <h2>NEW ARRIVALS</h2>
          </div>
          <div className="arrivals__cards">
            {cardInfo.map((card, index) => (
              <Card
                {...card}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Arrivals;
