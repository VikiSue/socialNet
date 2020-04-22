import React, { useState } from "react";
import Person from "../../reusableComponents/Person/Person";
import { connect } from "react-redux";
import {
  followFriends,
  unFollowFriends
} from "../../../Redux/actions/followUnFollowFriends";

const Friend = ({ match, friends, followFriends, unFollowFriends }) => {
  const id = match.params.id;
  const selectedPerson = friends.filter(item => item.id === +id)[0];

  return (
    <Person
      selectedPerson={selectedPerson}
      id={id}
      follow={followFriends}
      unFollow={unFollowFriends}
    />
  );
};

const FriendContainer = connect(
  state => ({
    friends: state.friends.friends
  }),
  { followFriends, unFollowFriends }
)(Friend);

export default FriendContainer;
