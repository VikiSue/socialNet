import React from "react";

const UserStatus = props => {

    const status = props.text.length > 0 ? props.text : props.profile.status;

    const handleBlur = () => {
        props.onStatusChange(status);
    };
  return (
    <div className="status">
      {props.profile.status.length < 1 ? (
        <p className="status__title" onDoubleClick={props.editStatus}>
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
        onBlur={handleBlur}
        className={props.profile.editableStatus ? "status__form" : "hidden"}
      >
        <input
          type="text"
          defaultValue={props.profile.status}
          onChange={props.handleChange}
          className="status__input"
          maxLength="100"
        />
      </form>
    </div>
  );
};

export default UserStatus;
