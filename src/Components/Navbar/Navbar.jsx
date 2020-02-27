import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="navbar__list">
      <NavLink to="/propfile" className="navbar__link" activeClassName='red'>Profile</NavLink>
      <NavLink to="/messages" className="navbar__link" activeClassName='red'>Messages</NavLink>
      <NavLink to="/friends" className="navbar__link" activeClassName='red'>Friends</NavLink>
      <NavLink to="/settings" className="navbar__link" activeClassName='red'>Settings</NavLink>
      <NavLink to="/users" className="navbar__link" activeClassName='red'>Users</NavLink>
    </ul>
  );
};

export default Navbar;
