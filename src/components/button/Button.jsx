import React from "react";
import "./Button.css";
import useScrollTo from "../../hooks/useScrollTo/useScrollTo";

const ButtonContact = ({ btn_title, variant, type, sectionId, onClick }) => {
  const scrollTo = useScrollTo();

  const handleClick = (event) => {
    if (onClick) {
      onClick(event);
    }
    if (sectionId) {
      scrollTo(sectionId);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`btn-contact ${variant}`}
      type={type}
    >
      {btn_title}
    </button>
  );
};

export default ButtonContact;
