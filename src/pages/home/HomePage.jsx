import React from "react";
import NavBar from "../../components/navBar/NavBar";
import LandingSection from "./sections/landingSection/LandingSection";
import AboutSection from "./sections/aboutSection/AboutSection";
import ServicesSection from "./sections/servicesSection/ServicesSection";
import WorkSection from "./sections/worksSection/WorkSection";
import ScrollToUp from "../../components/scrollToUp/ScrollToUp";
import ContactMe from "./sections/contactMe/ContactMe";
import Footer from "../../components/footer/Footer";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <LandingSection />
      <AboutSection />
      <ServicesSection />
      <WorkSection />
      <ContactMe />
      <Footer />
      <ScrollToUp />
    </div>
  );
};

export default HomePage;
