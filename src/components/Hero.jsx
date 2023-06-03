import React from "react";

const Hero = () => {
  return (
    <section className="section-hero">
      <div className="container">
        <div className="hero">
          <div className="hero__text">
            <p>
              <span>LET’S</span> <br />
              EXPLORE <br />
              <span>UNIQUE</span> <br />
              CLOTHES.
            </p>
            <p>Live for Influential and Innovative fashion!</p>
            <div>
              <a href="#!">Shop Now</a>
            </div>
          </div>
          <div className="hero__image">
            <img
              src="./img/hero-women.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
