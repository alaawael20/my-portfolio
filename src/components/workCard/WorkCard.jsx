import React from "react";
import "./WorkCard.css";
import CustomContainer from "./../container/Container";
import ButtonContact from "../button/Button";

const WorkCard = ({ project, live, workImage }) => {
  return (
    <CustomContainer>
      <div className="workCard mb-4">
        <img src={workImage} alt="AlaaPicture" className="workImage" />
        <div className="cardBody">
          <h5 className="cardTitle">{project}</h5>
          <a href={live} target="_blank" rel="noopener noreferrer">
            <ButtonContact btn_title="Live Demo" />
          </a>
        </div>
      </div>
    </CustomContainer>
  );
};

export default WorkCard;
