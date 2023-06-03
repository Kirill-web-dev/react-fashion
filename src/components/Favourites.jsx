import React from "react";
import Card from "./Card";

const cardInfo = [
  {
    imagePath: "./img/01-02.jpg",
    text: "Trending on instagram",
  },
  {
    imagePath: "./img/02-02.jpg",
    text: "All Under $40",
  },
];

const Favourites = () => {
  return (
    <section className="section-favourites">
      <div className="container">
        <div className="favourites">
          <h2>Young’s Favourite</h2>
          <div className="cards">
            {cardInfo.map((el) => (
              <Card {...el} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Favourites;
