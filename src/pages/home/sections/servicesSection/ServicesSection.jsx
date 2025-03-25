import React from "react";
import TitleSection from "../../../../components/titleSection/TitleSection";
import ServiceCard from "../../../../components/serviceCard/ServiceCard";
import { services } from "../../../../mock/Services";
import { Col, Container, Row } from "react-bootstrap";

const ServicesSection = () => {
  return (
    <div id="services">
      <Container>
        <TitleSection title="Services" />
        <Row>
          {services.map((service) => (
            <Col md={4}>
              <ServiceCard
                id={service.id}
                title={service.title}
                description={service.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ServicesSection;
