import React from "react";

const Input = ({
  type,
  placeholder,
  value,
  onChange,
  customClass,
  autoFocus,
}) => (
  <input
    className={customClass}
    type={type}
    autoFocus={autoFocus}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

export default Input;
