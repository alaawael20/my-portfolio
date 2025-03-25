import React from "react";
import NavBar from "../../components/navBar/NavBar";
import LandingSection from "./sections/landingSection/LandingSection";
import AboutSection from "./sections/aboutSection/AboutSection";
import ServicesSection from "./sections/servicesSection/ServicesSection";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <LandingSection />
      <AboutSection />
      <ServicesSection />
    </div>
  );
};

export default HomePage;
