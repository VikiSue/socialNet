import React, { useState } from "react";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import LogIn from "./LogIn/LogIn";
import "../scss/styles.scss";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import Profile from "./Profile/Profile";
import Settings from "./Settings/Settings";
import Users from "./Users/Users/Users";
import User from "./User/User";
import { hideSelectedUser } from "../actions/hideSelectedUser";

const App = props => {
  return (
    <div className="app">
      <div className="header">
        <Header />
      </div>
      {!props.isLogged ? (
        <LogIn />
      ) : (
        <div className="main">
          <div className="navbar">
            <Navbar />
          </div>
          <div className="content">
            <Route path="/profile" render={() => <Profile />} />
            <Route path="/settings" render={() => <Settings />} />
            {props.selectedUser.name ? (
              <Route
                path="/users"
                render={() => (
                  <User
                    selectedUser={props.selectedUser}
                    hideSelectedUser={props.hideSelectedUser}
                  />
                )}
              />
            ) : (
              <Route path="/users" render={() => <Users />} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const AppContainer = connect(
  state => ({
    isLogged: state.logIn.isLogged,
    selectedUser: state.users.selectedUser
  }),
  { hideSelectedUser }
)(App);
export default AppContainer;
