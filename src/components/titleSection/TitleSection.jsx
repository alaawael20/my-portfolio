import React from "react";
import "./TitleSection.css";

const TitleSection = ({ title }) => {
  return (
    <div className="title">
      <span>{title}</span>
    </div>
  );
};

export default TitleSection;
