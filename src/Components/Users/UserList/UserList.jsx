import React, { useState } from "react";
import { connect } from "react-redux";
import { onUsersPageChange } from "../../../actions/onUsersPageChange";
import { fetchUsers } from "../../../actions/fetchUsers";
import { getSelectedUser } from "../../../actions/getSelectedUser";
import { Link, withRouter } from "react-router-dom";

const UsersList = (props) => {
  const pages = [1, 2, 3, 4, 5, 6, 7];
  console.log("Wi", props);

  const handlePageChange = p => {
    props.onUsersPageChange(p);
    props.fetchUsers(p);
  };

  return (
    <>
      <div className=" users__pagination">
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
          <Link to={`/users/${item.id}`}  key={item.id}  onClick={() => props.getSelectedUser(props.list, item.id)} className="users__link" >
            <li
                className="users__item"
            >
              <div className="users__photo">
                <img
                  src={item.picture.thumbnail}
                  alt="userPhoto"
                  className="users__img"
                />
              </div>
              <div className="users__info">
                <p className="users__name">
                  <span className="red">Name:</span> {item.name.first}{" "}
                  {item.name.last}
                </p>
                <p className="users__location">
                  <span className="red">Country:</span> {item.location.country}
                </p>
                <p className="users__location">
                  <span className="red">City:</span> {item.location.city}
                </p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}

const UserListWithRouter = withRouter(UsersList);

const UsersListContainer = connect(
  state => ({
    currentPage: state.users.currentPage
  }),
  { fetchUsers, onUsersPageChange, getSelectedUser }
)(UserListWithRouter);

export default UsersListContainer;
