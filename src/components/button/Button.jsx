import React, { useState } from "react";
import "./Button.scss";

const Button = (props) => {
  const {
    name = "btn",
    scale,
    shape,
    disabled,
    type = "button",
    onClick,
    togle,
    color,
    link,
    children,
  } = props;

  return (
    <button
      className={name}
      scale={scale}
      shape={shape}
      disabled={disabled}
      type={type}
      onClick={onClick}
      togle={togle}
      link={link}
      color={color}
    >
      {children}
    </button>
  );
};

export default Button;

// Back_arrow BTN
// <button
//   className="prev"
//   type="submit"
//   onClick={(e) => {
//     e.preventDefault();

//     navigator("/");
//   }}
// >
//   <img src="/images/Back_arrow.svg" alt="Back_arrow" />
// idDataCheck && passwordDataCheck ? false : true
// </button>
