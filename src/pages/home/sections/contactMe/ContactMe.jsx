import React, { useRef } from "react";
import "./ContactMe.css";
import { Col, Container, Form, Row } from "react-bootstrap";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import TitleSection from "./../../../../components/titleSection/TitleSection";
import ButtonContact from "../../../../components/button/Button";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "Alaa@wael123",
        "template_jkf5g0a",
        form.current,
        "SZYqL0yCVIY7iVxsC"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <div id="contact">
      <Container>
        <TitleSection title="Contact With Me" />
        <Row className="contactSection">
          <Col md={5} className="contact-info">
            <h2>
              <span className="highlight">Let's talk</span>
            </h2>
            <p>
              I'm currently available to take on new projects, so feel free to
              send me a message about anything you want me to work on.
            </p>
            <div className="contact-details">
              <p>
                <FaEnvelope />{" "}
                <span style={{ marginLeft: "15px" }}>
                  alaaelfaqawi20@gmail.com
                </span>
              </p>
              <p>
                <FaPhoneAlt />{" "}
                <span style={{ marginLeft: "15px" }}>+970 59-819-4288</span>
              </p>
              <p>
                <FaMapMarkerAlt />{" "}
                <span style={{ marginLeft: "15px" }}>
                  PA, Gaza Strip - KhanYonis
                </span>
              </p>
            </div>
          </Col>

          <Col md={7}>
            <Form ref={form} onSubmit={handleSubmit} className="contact-form">
              <Form.Group controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="mb-2 formText"
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Your Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="mb-2 formText"
                />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Write your message here</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={4}
                  placeholder="Enter your message"
                  required
                  className="mb-2 formText"
                />
              </Form.Group>

              <ButtonContact btn_title="Submit now" type="submit" />
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactMe;
