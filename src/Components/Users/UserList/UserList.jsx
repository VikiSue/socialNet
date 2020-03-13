import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const UsersList = props => {
  return (
    <ul className="users__list">
      {props.list.map(item => (
        <NavLink
          exact
          to={`/users/${item.id}`}
          key={item.id}
          onClick={() => props.getSelectedUser(props.list, item.id)}
          className="users__link"
        >
          <li className="users__item">
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
              <div className={item.online ? "users__online" : "hidden"}>&#8226; online</div>
              <div className={item.online ? "hidden" : "users__offline"}>&#8226; offline</div>
            </div>
          </li>
        </NavLink>
      ))}
    </ul>
  );
};

const UserListWithRouter = withRouter(UsersList);

export default UserListWithRouter;
