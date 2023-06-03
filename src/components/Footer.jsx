import React from "react";
import FooterInfo from "./FooterInfo";

const footerInfo = [
  {
    title: "Company",
    text: ["About", "Contact us", "Support", "Careers"],
  },
  {
    title: "Quick Link",
    text: ["Share Location", "Orders Tracking", "Size Guide", "FAQs"],
  },
  {
    title: "Legal",
    text: ["Terms & conditions", "Privacy Policy"],
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content">
          <div className="content__left">
            <h2>FASHION</h2>
            <p>
              Complete your style with awesome
              <br />
              clothes from us.
            </p>
            <div className="social">
              <div>
                <img src="./icons/facebook.svg" />
              </div>
              <div>
                <img src="./icons/inst.svg" />
              </div>
              <div>
                <img src="./icons/twitter.svg" />
              </div>
              <div>
                <img src="./icons/in.svg" />
              </div>
            </div>
          </div>
          <div className="content__right">
            {footerInfo.map((elem) => (
              <div>
                <FooterInfo {...elem} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
