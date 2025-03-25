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
        <Row>
          {works.map((work) => (
            <Col md={4}>
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
