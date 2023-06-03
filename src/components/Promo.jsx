import React from "react";

const Promo = () => {
  return (
    <section className="section-promo">
      <div className="container">
        <div className="promo">
          <div className="promo__left">
            <img src="./img/promo-women.png" />
          </div>
          <div className="promo__right">
            <div className="promo__right-text">
              <h2>
                PAYDAY <br />
                SALE NOW
              </h2>
              <p>
                Spend minimal $100 get 30% off <br />
                voucher code for your next purchase
              </p>
              <b>1 June - 10 June 2021</b>
              <p>*Terms & Conditions apply</p>
              <a href="#!">SHOP NOW</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
