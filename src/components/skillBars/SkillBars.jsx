import React from "react";
import "./SkillBars.css";
import { ProgressBar, Container, Row, Col } from "react-bootstrap";

const skills = [
  { name: "HTML & CSS", level: 95 },
  { name: "Bootstrap", level: 85 },
  { name: "TypeScript", level: 20 },
  { name: "React JS", level: 80 },
  { name: "Next JS", level: 40 },
  { name: "JavaScript", level: 85 },
];

const SkillBars = () => {
  return (
    <Container className="text-white p-4">
      {skills.map((skill, index) => (
        <Row key={index} className="align-items-center mb-3">
          <Col xs={3} className="text-end">
            <p className="mb-0">{skill.name}</p>
          </Col>
          <Col xs={9}>
            <ProgressBar
              now={skill.level}
              style={{ height: "8px", background: "transparent" }}
              className="progress-gradient"
            />
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default SkillBars;
