import React from "react";
import Person from "../../reusableComponents/Person/Person";
import { connect } from "react-redux";
import { followUser } from "../../../Redux/actions/followUnFollowUser";
import { unFollowUser } from "../../../Redux/actions/followUnFollowUser";

const User = ({ match,  users, followUser, unFollowUser }) => {
  const id = match.params.id;
  const selectedPerson = users.filter(item => item.id === +id)[0];
  console.log(users, selectedPerson, id, users);
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
