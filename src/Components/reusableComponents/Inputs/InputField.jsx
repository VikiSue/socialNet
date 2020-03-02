import React from "react";
import "../../../scss/styles.scss";

const InputField = ({
  icon,
  defaultValue,
  placeholder,
  type,
  input,
  meta,
  ...props
}) => {
  const isFieldValid = meta.touched && meta.error;
console.log("i", defaultValue);
  return (
    <>
      <div className="inputGroup">
        <input
          value={defaultValue}
          placeholder={placeholder}
          type={type}
          maxLength="40"
          {...input}
          className={
            isFieldValid ? "inputGroup__input error" : "inputGroup__input "
          }
        />
        <div className="inputGroup__icon">
          <img src={icon} alt="icon" />
        </div>
        <p className="inputGroup__error">
          {isFieldValid ? meta.error : undefined}{" "}
        </p>
      </div>
    </>
  );
};

export default InputField;
