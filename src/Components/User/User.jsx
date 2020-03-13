import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { toggleFollow } from "../../actions/toggleFollow";

const User = ({selectedUser, toggleFollow}) => {
   const handleToggle = () => {
        toggleFollow(selectedUser);
    }
  return (
    <div className="user">
      <div className="user__img">
        <div className="user__outline">
          <div className="user__photo">
            <img className="user__image" src={selectedUser.picture} />
          </div>
        </div>
      </div>
      <div className="user__text">
          <div className={selectedUser.online ? "user__online" : "hidden"}> &#8226; online</div>
          <div className={selectedUser.online ? "hidden" : "user__offline"}> &#8226; offline</div>
        <p className="user__data">
          <span className="user__info">Name: </span> {selectedUser.name}
        </p>
        <p className="user__data">
          <span className="user__info">Age: </span> {selectedUser.age}
        </p>
        <p className="user__data">
          <span className="user__info">Location: </span>
          {selectedUser.location}
        </p>
        <p className="user__data">
          <span className="user__info">Date of birth: </span>
          {selectedUser.date}
        </p>
        <p className="user__data">
          <span className="user__info">Cell number: </span>
          {selectedUser.cell}
        </p>
      </div>
      <button
        className={selectedUser.follow ? "user__btn" : "hidden"}
        onClick={handleToggle}
      >
        Unfollow
      </button>
      <button
        className={selectedUser.follow ? "hidden" : "user__btn user__btn--bright"}
        onClick={handleToggle}
      >
        Follow
      </button>
    </div>
  );
};
const UserWithRouter = withRouter(User);
const UserContainer = connect(
  state => ({
    selectedUser: state.users.selectedUser
  }),
  { toggleFollow }
)(UserWithRouter);

export default UserContainer;
