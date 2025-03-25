import React from "react";
import "./ServiceCard.css";
import { Card, Container } from "react-bootstrap";

const ServiceCard = ({ id, title, description }) => {
  return (
    <Container>
      <Card className="serviceCard">
        <Card.Body className="d-flex flex-column justify-content-center">
          <Card.Title className="mainTitle">{id}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted subTitle">
            {title}
          </Card.Subtitle>
          <Card.Text className="cardDescription">{description}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ServiceCard;
