import React from "react";
import "./AboutSection.css";
import TitleSection from "../../../../components/titleSection/TitleSection";
import CustomContainer from "../../../../components/container/Container";
import { Col, Row } from "react-bootstrap";
import SkillBars from "../../../../components/skillBars/SkillBars";

const AboutSection = () => {
  return (
    <CustomContainer>
      <TitleSection title="About Me" />
      <div className="about-section">
        <Row className="about">
          <Col sm={4} className="rightSection">
            <img
              src="/assets/alaaPicture.jpg"
              alt="myPicture"
              className="myPicture"
            />
          </Col>
          <Col sm={8} className="leftSection">
            <p className="p1">
              I'm a passionate Front-End Developer with a strong focus on
              creating interactive and user-friendly web interfaces. Proficient
              in HTML, CSS, Bootstrap, JavaScript, and React.js, I enjoy
              bringing designs to life with clean and efficient code.
            </p>
            <p className="p1">
              I'm always eager to learn new technologies and stay updated with
              the latest trends in web development.
            </p>
            <SkillBars />
          </Col>
        </Row>
      </div>
    </CustomContainer>
  );
};

export default AboutSection;
