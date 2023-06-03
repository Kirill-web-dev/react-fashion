import React from "react";

const EmailInput = () => {
  return (
    <section className="section-email-input">
      <div className="container">
        <div className="content">
          <h2>
            JOIN SHOPPING COMMUNITY <br />
            TO GET MONTHLY PROMO
          </h2>
          <p>Type your email down below and be young wild generation</p>
          <div className="email">
            <input
              type="email"
              placeholder="Add your email here"
            />
            <button>SEND</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailInput;
