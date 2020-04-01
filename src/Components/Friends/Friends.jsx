import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchFriends } from "../../actions/fetchFriends";
import UsersList from "../reusableComponents/UsersList/UsersList";
import Loader from "../reusableComponents/Loader/Loader";


const Friends = ({ friends, fetchFriends, isLoading, getSelectedUser }) => {

    useEffect( () => {
    fetchFriends();

  }, []);



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
                  list={friends} url={'/friends/'}/*follow={followFriends} unFollow={unfollowFriends}*/
              />
      )}
  </div>;
};

const FriendsContainer = connect(
  state => ({
    friends: state.friends.friends,
    isLoading: state.friends.isLoading
  }),
  { fetchFriends }
)(Friends);

export default FriendsContainer;
