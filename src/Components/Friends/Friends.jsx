import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions/fetchUsers";
import {onUsersPageChange} from "../../actions/onUsersPageChange";
import {getSelectedUser} from "../../actions/getSelectedUser";
import UsersList from "../reusableComponents/UsersList/UsersList";
import Loader from "../reusableComponents/Loader/Loader";


const Friends = ({ users, fetchUsers, isLoading, onUsersPageChange, getSelectedUser }) => {
  const [newUsers, setNewUsers] = useState([...users]);
  const [friends, setFriends] = useState([]);

    useEffect( () => {
       users.length === 0 ? setNewUsers(fetchUsers(1)) : setNewUsers([...users]);

setFriends(newUsers.filter(item => item.follow === true));

  }, [users]);

  return <div className="friends">
      <div className="rainbow-text">
          <div className="title-text">
              <span className="letters">F</span>
              <span className="letters">R</span>
              <span className="letters">I</span>
              <span className="letters">E</span>
              <span className="letters">N</span>
              <span className="letters">D</span>
              <span className="letters">S</span>
          </div>
      </div>
      {isLoading ? (
          <Loader />
      ) : (
              <UsersList
                  list={friends}
                  url="/friends/"
                  fetchUsers={fetchUsers}
                  onUsersPageChange={onUsersPageChange}
                  getSelectedUser={getSelectedUser}
              />
      )}
  </div>;
};

const FriendsContainer = connect(
  state => ({
    users: state.users.users,
    isLoading: state.users.isLoading
  }),
  { fetchUsers, onUsersPageChange, getSelectedUser }
)(Friends);

export default FriendsContainer;
