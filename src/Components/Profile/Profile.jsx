import React from "react";
import { connect } from "react-redux";
import { editStatus } from "../../actions/editStatus";
import { onStatusChange } from "../../actions/onStatusChange";
import UserStatus from "./UserStatus";
import { useProfile } from "./useProfile";
import ProfileTabs from "./ProfileTabs/ProfileTabs";

const Profile = props => {
  const { text, handleChange } = useProfile();
  const handleBlur = () => {
    props.onStatusChange(text);
  };

  return (
    <div className="profile">
      <div className="profile__header">
        <div className="profile__border">
          <div className="profile__photo">
            <img
              src={props.profile.photo}
              alt="profile photo"
              className="profile__img"
            />
          </div>
        </div>

        <div className="profile__info">
          <p className="profile__text">
            <span className="red">Name: </span> {props.profile.firstName}{" "}
            {props.profile.lastName}
          </p>
          <p className="profile__text">
            <span className="red">Birthday: </span> {props.profile.birthday}
          </p>
          <p className="profile__text">
            <span className="red">Country:</span> {props.profile.country}
          </p>
          <p className="profile__text">
            <span className="red">City:</span> {props.profile.city}
          </p>
          <p className="profile__text">
            <span className="red">Email:</span> {props.profile.email}
          </p>
        </div>
        <UserStatus
          props={props}
          handleBlur={handleBlur}
          handleChange={handleChange}
          profile={props.profile}
          editStatus={props.editStatus}
          onStatusChange={props.onStatusChange}
        />
      </div>
      <div className="tabs">
        <ProfileTabs />
      </div>
    </div>
  );
};

const ProfileContainer = connect(
  state => ({
    profile: state.profile
  }),
  { editStatus, onStatusChange }
)(Profile);

export default ProfileContainer;
