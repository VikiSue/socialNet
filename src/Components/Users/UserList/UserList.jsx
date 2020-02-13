import React, { useState } from "react";
import { connect } from "react-redux";
import { onUsersPageChange } from "../../../actions/onUsersPageChange";
import { fetchUsers } from "../../../actions/fetchUsers";
import { useUsersList } from "./useUsersList";
import User from "../User/User";

const UsersList = props => {
  const { handleSelect, selectedUser, handleHide } = useUsersList(props.list);
  const pages = [1, 2, 3, 4, 5, 6, 7];

  const handlePageChange = p => {
    props.onUsersPageChange(p);
    props.fetchUsers(p);
  };

  return (
    <>
      <div>
        {selectedUser.name ? (
          <User selectedUser={selectedUser} handleHide={handleHide} />
        ) : (
          undefined
        )}
      </div>
      <div className=' users__pagination'>
        {pages.map(p => (
          <span
            key={p}
            className={
              props.currentPage === p ? "users__pageActive" : "users__page"
            }
            onClick={() => {
              handlePageChange(p);
            }}
          >
            {p}
          </span>
        ))}
      </div>
      <ul className="users__list">
        {props.list.map(item => (
          <li
            key={item.cell}
            className="users__item"
            onClick={() => handleSelect(item.cell)}
          >
            <div className="users__photo">
              <img src={item.picture.thumbnail} className="users__img" />
            </div>
            <div className="users__info">
              <p className="users__name">
                <span className="red">Name:</span> {item.name.first}{" "}
                {item.name.last};
              </p>
              <p className="users__location">
                <span className="red">Country:</span> {item.location.country}
              </p>
              <p className="users__location">
                <span className="red">City:</span> {item.location.city}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
const UsersListContainer = connect(
  state => ({
    currentPage: state.users.currentPage
  }),
  { fetchUsers, onUsersPageChange }
)(UsersList);

export default UsersListContainer;
