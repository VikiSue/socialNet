import React from "react";
import { connect } from "react-redux";
import { editProfile } from "../../actions/editProfile";
import InputField from "../reusableComponents/Inputs/InputField";
import { Field, reduxForm } from "redux-form";
import {
  isRegExEmail,
  required,
  isRegExPhone,
  minLength
} from "../../services/validators";
import mail from "../../img/mail.png";
import country from "../../img/country.png";
import city from "../../img/city.png";
import name from "../../img/name.png";
import phone from "../../img/phone.png";


const SettingsForm = props => {
  const minLengthText = () => {
    minLength(3);
  };

  console.log("FFFF", props);
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
              defaultValue={props.profile.firstName}
              type="text"
              validate={[required, minLengthText]}
              icon={name}
            />
          </div>
          <div className="settingsForm__labelsGroup">
            <label className="settingsForm__label">Last Name</label>
            <Field
              name="lastName"
              component={InputField}
              defaultValue={props.profile.lastName}
              type="text"
              validate={[required, minLengthText]}
              icon={name}
            />
          </div>
        </div>

        <div className="settingsForm__inputsGroup">
          <div className="settingsForm__labelsGroup">
            <label className="settingsForm__label">Country</label>
            <Field
              defaultValue={props.profile.country}
              name="country"
              component={InputField}
              type="text"
              validate={[required, minLengthText]}
              icon={country}
            />
          </div>
          <div className="settingsForm__labelsGroup">
            <label className="settingsForm__label">City</label>
            <Field
              defaultValue={props.profile.city}
              name="city"
              component={InputField}
              type="text"
              validate={[required, minLengthText]}
              icon={city}
            />
          </div>
        </div>
        <div className="settingsForm__inputsGroup">
          <div className="settingsForm__labelsGroup">
            <label className="settingsForm__label">Cell</label>
            <Field
              defaultValue={props.profile.cell}
              name="cell"
              component={InputField}
              type="text"
              validate={[required, isRegExPhone]}
              icon={phone}
            />
          </div>
          <div className="settingsForm__labelsGroup">
            <label className="settingsForm__label">Email</label>
            <Field
              defaultValue={props.profile.email}
              name="email"
              component={InputField}
              type="text"
              validate={[isRegExEmail, required]}
              icon={mail}
            />
          </div>
        </div>

        <button type="submit" label="SAVE" className="btn">
          SAVE
        </button>
      </div>
    </form>
  );
};
const SettingsFormRedux = reduxForm({
  form: "settings",
  destroyOnUnmount: false,
})(SettingsForm);

const SettingsFormContainer = connect(
  state => ({
    profile: state.profile
  }),
  { editProfile }
)(SettingsFormRedux);
export default SettingsFormContainer;
