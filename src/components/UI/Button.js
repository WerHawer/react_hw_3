import React from "react";

const Button = ({ type, name, customClass, children, onClick }) => (
  <button type={type} name={name} className={customClass} onClick={onClick}>
    {children}
  </button>
);

export default Button;
