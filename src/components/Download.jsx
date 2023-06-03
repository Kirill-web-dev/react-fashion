import React from "react";

const Download = () => {
  return (
    <section className="section-download">
      <div className="container">
        <div className="download">
          <div className="download__left">
            <h2>
              DOWNLOAD APP & <br />
              GET THE VOUCHER!
            </h2>
            <p>
              Get 30% off for first transaction using <br />
              Rondovision mobile app for now.
            </p>
            <div>
              <img src="./icons/app-store.jpg" />
              <img src="./icons/google-play.jpg" />
            </div>
          </div>
          <div className="download__right">
            <img src="./img/phone.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
