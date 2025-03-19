import React from "react";
import NavBar from "../../components/navBar/NavBar";
import LandingSection from "./sections/landingSection/LandingSection";
import AboutSection from "./sections/aboutSection/AboutSection";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <LandingSection />
      <AboutSection />
    </div>
  );
};

export default HomePage;
