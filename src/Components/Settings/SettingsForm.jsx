import React from "react";
import DatePickerComponent from "../reusableComponents/DatePicker/DatePickerComponent";
import InputField from "../reusableComponents/Inputs/InputField";
import { Field, reduxForm } from "redux-form";
import { isRegEx, required } from "../../services/validators";
import mail from "../../img/mail.png";
import country from "../../img/country.png";
import city from "../../img/city.png";
import name from "../../img/name.png";
import phone from "../../img/phone.png";

const SettingsForm = props => {
  return (
    <form onSubmit={props.handleSubmit} className="settingsForm">
      <div className="rainbow-text">
        <div className="title-text">
          <span className="letters">P</span>
          <span className="letters">R</span>
          <span className="letters">O</span>
          <span className="letters">F</span>
          <span className="letters">I</span>
          <span className="letters">L</span>
          <span className="letters">E</span>
        </div>
      </div>
      <div className="settingsForm__inputs">
        <div className="settingsForm__inputsGroup">
          <div className="settingsForm__labelsGroup">
            <label className="settingsForm__label">First Name</label>
            <Field
              name="firstName"
              component={InputField}
              type="text"
              validate={[required]}
              icon={name}
            />
          </div>
          <div className="settingsForm__labelsGroup">
            <label className="settingsForm__label">Last Name</label>
            <Field
              name="lastName"
              component={InputField}
              type="text"
              validate={[required]}
              icon={name}
            />
          </div>
        </div>
        <div className="settingsForm__inputsGroup">
          <div className="settingsForm__labelsGroup">
            <label className="settingsForm__label">Country</label>
            <Field
              name="country"
              component={InputField}
              type="text"
              validate={[required]}
              icon={country}
            />
          </div>
          <div className="settingsForm__labelsGroup">
            <label className="settingsForm__label">City</label>
            <Field
              name="city"
              component={InputField}
              type="text"
              validate={[required]}
              icon={city}
            />
          </div>
        </div>
        <div className="settingsForm__inputsGroup">
          <div className="settingsForm__labelsGroup">
            <label className="settingsForm__label">Phone Number</label>
            <Field
              name="cell"
              component={InputField}
              type="text"
              validate={[required]}
              icon={phone}
            />
          </div>
          <div className="settingsForm__labelsGroup">
            <label className="settingsForm__label">Email</label>
            <Field
              name="email"
              component={InputField}
              type="text"
              validate={[isRegEx, required]}
              icon={mail}
            />
          </div>
        </div>
      {/*  <div className="settingsForm__datePicker">
          <label className="settingsForm__label">Birthday</label>
          <Field
            name="birthday"
            component={DatePickerComponent}
            type="text"
            validate={[required]}
          />
        </div>*/}

        <button type="submit" label="SAVE" className="btn">
          SAVE
        </button>
      </div>
    </form>
  );
};
const SettingsFormRedux = reduxForm({
  form: "settings",
  destroyOnUnmount: false
})(SettingsForm);

export default SettingsFormRedux;
