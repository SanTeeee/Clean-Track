import React from "react";
import NavBar from "./LandingPage/navbar/Navbar";
import Firstpage from "./LandingPage/FirstPage/Firstpage";
import TrustedBrands from "./LandingPage/trusted brands/TrustedBrands";
import HIW from "./LandingPage/How it works/HIW";
import PersonalizedData from "./LandingPage/Personalized/PersonalizedData";
import Footer from "./LandingPage/Footer/Footer";

const Landing = () => {
  return (
    <div>
      <NavBar />
      <Firstpage />
      <TrustedBrands />
      <HIW />
      <PersonalizedData />
      <Footer />
    </div>
  );
};

export default Landing;
