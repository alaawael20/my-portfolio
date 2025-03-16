import React from "react";
import "./LandingSection.css";
import CustomContainer from "../../../../components/container/Container";
import { Col, Row } from "react-bootstrap";
import ButtonContact from "../../../../components/button/Button";

const LandingSection = () => {
  return (
    <CustomContainer>
      <Row className="landing">
        <Col sm={8}>
          <h2 className="my-name">
            <span>I'm Alaa Al-faqawi,</span> a Software Engineer with a passion
            for building.
          </h2>
          <p className="my-description">
            I'm a Front-End Developer passionate about building interactive,
            user-friendly interfaces with a focus on automation and data-driven
            solutions.
          </p>
          <div className="my-button">
            <ButtonContact btn_title="Contact With Me" />
            <ButtonContact btn_title="My resume" variant="outline" />
          </div>
        </Col>
        <Col sm={4}>
          <img
            src="/assets/myPicture.jpg"
            alt="My-Picture"
            className="my-picture"
          />
        </Col>
      </Row>
    </CustomContainer>
  );
};

export default LandingSection;
