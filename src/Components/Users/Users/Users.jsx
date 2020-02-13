import React from "react";

import { connect } from "react-redux";
import { fetchUsers } from "../../../actions/fetchUsers";
import { onUsersPageChange } from "../../../actions/onUsersPageChange";
import Loader from "../../Loader/Loader";
import { useUsers } from "./useUsers";
import UsersList from "../UserList/UserList";
import search from './../../../img/search.png';

const Users = props => {


  const { handleSearch, list, searchText } = useUsers(
    props.fetchUsers,
    props.users,
    props.currentPage
  );
  console.log("UUU", list);
  return (
    <div className="users">
      <div className='users__search'>
        <input
          className="users__input"
          type="text"
          value={searchText}
          onChange={handleSearch}
          maxLength="20"
        />
        <div className='users__icon'>
            <img src={search}/>
        </div>
      </div>
      {props.isLoading ? <Loader /> : <UsersList list={list} />}
    </div>
  );
};

const UsersContainer = connect(
  state => ({
    users: state.users.users,
    isLoading: state.users.isLoading,
    currentPage: state.users.currentPage
  }),
  { fetchUsers, onUsersPageChange }
)(Users);
export default UsersContainer;
