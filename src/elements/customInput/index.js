// Core
import React from "react";

export const CustomInput = ({
  error,
  errorCX,
  label,
  name,
  onBlur,
  onChange,
  placeholder,
  type,
  value = "",
  wrapCX,
  touched,
}) => {
  const errorJSX = error && touched && <p className={errorCX}>{error}</p>;

  return (
    <>
      <div className={wrapCX}>
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
      </div>
      {errorJSX}
    </>
  );
};
