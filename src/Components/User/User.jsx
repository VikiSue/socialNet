import React from "react";
import Person from "../reusableComponents/Person/Person";
import { connect } from "react-redux";
import { followUser } from "../../actions/followUnFollowUser";
import { unFollowUser } from "../../actions/followUnFollowUser";

const User = ({ users, match, followUser, unFollowUser }) => {
  const id = match.params.id;
  const selectedPerson = users.filter(item => item.id == id)[0];

  return (
    <Person
      selectedPerson={selectedPerson}
      id={id}
      follow={followUser}
      unFollow={unFollowUser}
    />
  );
};

const UserContainer = connect(
  state => ({
    users: state.users.users
  }),
  { followUser, unFollowUser }
)(User);

export default UserContainer;
