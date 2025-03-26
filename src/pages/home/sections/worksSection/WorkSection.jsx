import React from "react";
import TitleSection from "../../../../components/titleSection/TitleSection";
import CustomContainer from "./../../../../components/container/Container";
import WorkCard from "../../../../components/workCard/WorkCard";
import { Col, Row } from "react-bootstrap";
import { works } from "../../../../mock/Works";

const WorkSection = () => {
  return (
    <div id="works" style={{ marginBlock: "20px" }}>
      <CustomContainer>
        <TitleSection title="My Works" />
        <Row className="justify-content-center">
          {works.map((work) => (
            <Col
              lg={4}
              md={6}
              sm={12}
              className="d-flex justify-content-center"
            >
              <WorkCard
                key={work.id}
                project={work.project}
                live={work.live}
                workImage={work.workImage}
              />
            </Col>
          ))}
        </Row>
      </CustomContainer>
    </div>
  );
};

export default WorkSection;
