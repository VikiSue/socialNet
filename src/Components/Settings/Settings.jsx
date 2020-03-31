import React from "react";
import SettingsForm from "./SettingsForm";
import { editProfile } from "../../actions/editProfile";
import { connect } from "react-redux";

const Settings = props => {
  const getInitialValues = () => {
    return {
      firstName: props.profile.firstName,
      lastName: props.profile.lastName,
      country: props.profile.country,
      city: props.profile.city,
      email: props.profile.email,
      cell: props.profile.cell
    };
  };

  const onSubmit = values => {
    props.editProfile(
      values.firstName,
      values.lastName,
      values.country,
      values.city,
      values.email,
      values.cell
    );
  };
  return (
    <div className="settings">
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
      <SettingsForm onSubmit={onSubmit} initialValues={getInitialValues()} />
    </div>
  );
};

const SettingsContainer = connect(
  state => ({ profile: state.profile }),
  { editProfile }
)(Settings);
export default SettingsContainer;
