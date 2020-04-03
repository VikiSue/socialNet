import React from "react";

const Person = ({ selectedPerson, follow, unFollow, id }) => {
  const handleFollow = () => {
    follow(id);
  };
  const handleUnFollow = () => {
    unFollow(id);
  };
  return (
    <div className="user">
      <div className="user__img">
        <div className="user__outline">
          <div className="user__photo">
            <img className="user__image" src={selectedPerson.picture.large} />
          </div>
        </div>
      </div>
      <div className="user__text">
        <div className={selectedPerson.online ? "user__online" : "hidden"}>
          &#8226; online
        </div>
        <div className={selectedPerson.online ? "hidden" : "user__offline"}>
          &#8226; offline
        </div>
        <p className="user__data">
          <span className="user__info">Name: </span>{" "}
          {`${selectedPerson.name.first} ${selectedPerson.name.last}`}
        </p>
        <p className="user__data">
          <span className="user__info">Age: </span> {selectedPerson.age}
        </p>
        <p className="user__data">
          <span className="user__info">Location: </span>
          {`${selectedPerson.location.city} ${selectedPerson.location.country}`}
        </p>
        <p className="user__data">
          <span className="user__info">Date of birth: </span>
          {selectedPerson.dob.date}
        </p>
        <p className="user__data">
          <span className="user__info">Cell number: </span>
          {selectedPerson.cell}
        </p>
        <button
          className={selectedPerson.follow === true ? "user__btn" : "hidden"}
          onClick={handleUnFollow}
        >
          Unfollow
        </button>
        <button
          className={
            selectedPerson.follow === false
              ? "user__btn user__btn--bright"
              : "hidden"
          }
          onClick={handleFollow}
        >
          Follow
        </button>
      </div>
    </div>
  );
};

export default Person;
