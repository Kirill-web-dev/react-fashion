import React from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Arrivals from "./components/Arrivals";
import Promo from "./components/Promo";
import Favourites from "./components/Favourites";
import Download from "./components/Download";
import EmailInput from "./components/EmailInput";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Brands />
      <Arrivals />
      <Promo />
      <Favourites />
      <Download />
      <EmailInput />
      <Footer />
    </div>
  );
};

export default App;
