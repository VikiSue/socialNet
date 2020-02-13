import React from "react";

const User = props => {
  return (
    <div className='users'>
      <img className='users__photo users__photoBig' src={props.selectedUser.picture} />
      <p className='users__name'>{props.selectedUser.name}</p>
      <p className='users__name'>{props.selectedUser.location}</p>
      <p className='users__name'>{props.selectedUser.cell}</p>
      <button className="btn" onClick={props.handleHide}>
        HIDE{" "}
      </button>
    </div>
  );
};

export default User;
