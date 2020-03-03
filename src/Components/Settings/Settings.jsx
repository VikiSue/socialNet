import React from "react";
import SettingsForm from "./SettingsForm";
import { editProfile } from "../../actions/editProfile";
import { connect } from "react-redux";
import Loader from "../reusableComponents/Loader/Loader";

const Settings = props => {
  const getInitialValues = () => {
    return {
      firstName: props.profile.firstName,
      lastName: props.profile.lastName,
      country: props.profile.country,
      city: props.profile.city,
      email: props.profile.email,
      cell: props.profile.cell,
    };
  };

  const onSubmit = values => {
    console.log("values", values);
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
      {props.isLoading ? (
        <Loader />
      ) : (
        <SettingsForm onSubmit={onSubmit} initialValues={getInitialValues()} />
      )}
    </div>
  );
};

const SettingsContainer = connect(
  state => ({ isLoading: state.profile.isLoading, profile: state.profile }),
  { editProfile }
)(Settings);
export default SettingsContainer;
