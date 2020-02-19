import React from "react";
import "../../../scss/styles.scss";

const InputField = ({ icon,value,  placeholder, type, input, meta, ...props }) => {
  const isFieldValid = meta.touched && meta.error;

  return (
    <>
      <div className="inputGroup">
        <input
          placeholder={placeholder}
          value={value}
          type={type}
          maxLength="20"
          {...input}
          className={isFieldValid ? "inputGroup__input error" : "inputGroup__input "}
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
