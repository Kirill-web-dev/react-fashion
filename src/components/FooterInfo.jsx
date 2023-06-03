import React from "react";

const FooterInfo = ({ title, text }) => {
  return (
    <>
      <h2>{title}</h2>
      {text.map((elem) => (
        <p style={{ opacity: "0.3" }}>{elem}</p>
      ))}
    </>
  );
};

export default FooterInfo;
