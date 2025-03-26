import React from "react";
import "./Button.css";
import useScrollTo from "../../hooks/useScrollTo/useScrollTo";

const ButtonContact = ({ btn_title, variant, type, sectionId }) => {
  const scrollTo = useScrollTo();
  return (
    <button
      onClick={() => scrollTo(sectionId)}
      className={`btn-contact ${variant}`}
      type={type}
    >
      {btn_title}
    </button>
  );
};

export default ButtonContact;
