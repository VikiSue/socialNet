import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const User = props => {
  return (
    <div className="user">
      <div className="user__img">
        <div className="user__outline">
          <div className="user__photo">
            <img className="user__image" src={props.selectedUser.picture} />
          </div>
        </div>
      </div>
      <div className="user__text">
        <p className="user__data">
          <span className="user__info">Name: </span> {props.selectedUser.name}
        </p>
        <p className="user__data">
          <span className="user__info">Age: </span> {props.selectedUser.age}
        </p>
        <p className="user__data">
          <span className="user__info">Location: </span>
          {props.selectedUser.location}
        </p>
        <p className="user__data">
          <span className="user__info">Date of birth: </span>
          {props.selectedUser.date}
        </p>
        <p className="user__data">
          <span className="user__info">Cell number: </span>
          {props.selectedUser.cell}
        </p>
      </div>
      <div className="user__btn"></div>
    </div>
  );
};
const UserWithRouter = withRouter(User);
const UserContainer = connect(state => ({
  selectedUser: state.users.selectedUser
}))(UserWithRouter);

export default UserContainer;
