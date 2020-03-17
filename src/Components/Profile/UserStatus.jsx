import React from "react";

const UserStatus = props => {
  return (
    <div className="status">
      {props.profile.status.length < 1 ? (
        <p className="status__title" onDoubleClick={props.editStatus}>
          {" "}
          What is on your mind?
        </p>
      ) : (
        <div
          className={props.profile.editableStatus ? "hidden" : "status__text"}
          onDoubleClick={props.editStatus}
        >
          <span>{props.profile.status}</span>
        </div>
      )}
      <form
        onBlur={props.handleBlur}
        className={props.profile.editableStatus ? "status__form" : "hidden"}
      >
        <input
          type="text"
          defaultValue={props.profile.status}
          onChange={props.handleChange}
          className="status__input"
          maxLength="60"
        />
      </form>
    </div>
  );
};

export default UserStatus;
