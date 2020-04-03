import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchFriends } from "../../actions/fetchFriends";
import UsersList from "../reusableComponents/UsersList/UsersList";
import Loader from "../reusableComponents/Loader/Loader";
import { useFriends } from "./useFriends";

const Friends = ({ friends, fetchFriends, isLoading }) => {
  const {sortedFriends, sortByName, sortByCity, sortByCountry} = useFriends(
    fetchFriends,
    friends
  );
  const list = sortedFriends.length > 0 ? sortedFriends : friends;

  return (
    <div className="friends">
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
        <>
          <div className="friends__sort">
              <span className="friends__text"> Sort by: </span>
            <button type="button" onClick={sortByName} className="friends__btn"> name</button>
              <button type="button" onClick={sortByCountry} className="friends__btn">country</button>
              <button type="button" onClick={sortByCity} className="friends__btn">city</button>
          </div>
          <UsersList list={list} url={"/friends/"} />
        </>
      )}
    </div>
  );
};

const FriendsContainer = connect(
  state => ({
    friends: state.friends.friends,
    isLoading: state.friends.isLoading
  }),
  { fetchFriends }
)(Friends);

export default FriendsContainer;
