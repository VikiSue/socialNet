import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../../actions/fetchUsers";
import { onUsersPageChange } from "../../../actions/onUsersPageChange";
import Loader from "../../reusableComponents/Loader/Loader";
import { useUsers } from "./useUsers";
import UsersList from "../UserList/UserList";
import search from "./../../../img/search.png";
import { getSelectedUser } from "../../../actions/getSelectedUser";
import Pagination from "../../reusableComponents/Pagination/Pagination";

const Users = props => {
  const { handleSearch, list, searchText, filteredUsers } = useUsers(
    props.fetchUsers,
    props.users,
    props.currentPage
  );
  return (
    <div className="users">
      <div className="users__search">
        <input
          className="users__input"
          type="text"
          value={searchText}
          onChange={handleSearch}
          maxLength="20"
        />
        <div className="users__icon">
          <img src={search} alt="icon" />
        </div>
        {filteredUsers.length === 0 && searchText.length > 0 ? (
          <p className="users__match"> No match found</p>
        ) : (
          <p className="users__match"></p>
        )}
      </div>
      {props.isLoading ? (
        <Loader />
      ) : (
        <>
          <Pagination
            onUsersPageChange={props.onUsersPageChange}
            fetchUsers={props.fetchUsers}
            currentPage={props.currentPage}
          />
          <UsersList
            list={list}
            currentPage={props.currentPage}
            fetchUsers={props.fetchUsers}
            onUsersPageChange={props.onUsersPageChange}
            getSelectedUser={props.getSelectedUser}
          />
        </>
      )}
    </div>
  );
};

const UsersContainer = connect(
  state => ({
    users: state.users.users,
    isLoading: state.users.isLoading,
    currentPage: state.users.currentPage,
    selectedUser: state.users.selectedUser
  }),
  { fetchUsers, onUsersPageChange, getSelectedUser }
)(Users);
export default UsersContainer;
