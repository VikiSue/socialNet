import React from "react";
import { Field, reduxForm } from "redux-form";
import "../../../scss/styles.scss";
import { required } from "../../../services/validators";
import { isRegExEmail } from "../../../services/validators";
import InputField from "../../reusableComponents/Inputs/InputField";
import { minLength } from "../../../services/validators";
import mail from "./../../../img/mail.png";
import password from "./../../../img/password.png";

const LogInForm = props => {
  const minLengthPassword = minLength(8);

  return (
    <form onSubmit={props.handleSubmit} className="form">
      <h5 className="form__title">Log In</h5>
      <div className="form__inputs">
        <Field
          name="username"
          component={InputField}
          type="text"
          placeholder="yourEmail@.com"
          validate={[isRegExEmail, required]}
          icon={mail}
        />
        <Field
          name="password"
          component={InputField}
          type="password"
          placeholder="Password"
          validate={[required, minLengthPassword]}
          icon={password}
        />
      </div>
      <button type="submit" label="submit" className="btn">
        Submit
      </button>
    </form>
  );
};

const LogInFormRedux = reduxForm({ form: "login", destroyOnUnmount: false })(
  LogInForm
);

export default LogInFormRedux;
