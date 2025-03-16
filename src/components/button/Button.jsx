import React from "react";
import "./Button.css";

const ButtonContact = ({ btn_title, variant, OnClick }) => {
  return (
    <button onClick={OnClick} className={`btn-contact ${variant}`}>
      {btn_title}
    </button>
  );
};

export default ButtonContact;
