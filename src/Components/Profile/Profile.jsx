import React from "react";
import { connect } from "react-redux";

const Profile = props => {
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
            <span className="red">Birthday:</span>
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
      </div>
    </div>
  );
};

const ProfileContainer = connect(state => ({
  profile: state.profile
}))(Profile);

export default ProfileContainer;
