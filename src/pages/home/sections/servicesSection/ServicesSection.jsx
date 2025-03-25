import React from "react";
import TitleSection from "../../../../components/titleSection/TitleSection";
import ServiceCard from "../../../../components/serviceCard/ServiceCard";
import { services } from "../../../../mock/Services";
import { Col, Container, Row } from "react-bootstrap";

const ServicesSection = () => {
  return (
    <Container>
      <TitleSection title="Services" />
      <Row className="g-4">
        {services.map((service) => (
          <Col key={service.id} md={4}>
            <ServiceCard
              id={service.id}
              title={service.title}
              description={service.description}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServicesSection;
