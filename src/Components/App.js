import React from "react";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import LogIn from "./LogIn/LogIn";
import "../scss/styles.scss";
import { connect } from "react-redux";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Profile from "./Profile/Profile";
import Settings from "./Settings/Settings";
import Users from "./Users/Users/Users";
import User from "./User/User";

const App = props => {
    return (
    <div className="app">
      <div className="header">
        <Header />
      </div>
      {props.isLogged ? (
          <Redirect to='/'/>) :

          (<LogIn />
      ) }
        <div className="main">
          <nav className="navbar">
            <Navbar />
          </nav>
          <div className="content">
            <Switch>
              <Route exact path="/" render={() => <Profile />} />
              <Route exact path="/settings" render={() => <Settings />} />
              <Route exact path="/users" render={() => <Users />} />
              <Route  path="/users/:id" render={() => <User />} />
            </Switch>
          </div>
        </div>

    </div>
  );
};

const AppWithRouter = withRouter(App);
const AppContainer = connect(state => ({
  isLogged: state.logIn.isLogged,
  users: state.users
}))(AppWithRouter);
export default AppContainer;
