import React from "react";

const User = props => {
  return (
    <div className="user">
      <div className="user__img">
        <img className="user__photo" src={props.selectedUser.picture} />
      </div>
      <div className='user__text'>
        <p className="user__data">
          <span className="user__info">Name: </span> {props.selectedUser.name}
        </p>
        <p className="user__data">
          <span className="user__info">Location: </span>
          {props.selectedUser.location}
        </p>
        <p className="user__data">
          <span className="user__info">Cell number: </span>
          {props.selectedUser.cell}
        </p>
      </div>
        <div className='user__btn'>
      <button className="btn" onClick={props.hideSelectedUser}>
        CLOSE
      </button></div>
    </div>
  );
};

export default User;
