import React from "react";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import LogIn from "./LogIn/LogIn";
import "../scss/styles.scss";
import { connect } from "react-redux";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Profile from "./Profile/Profile";
import Users from "./Users/Users/Users";
import { withSuspense } from "../services/withSuspense";

//lazy import
const Settings = React.lazy(() => import("./Settings/Settings"));
const Friends = React.lazy(() => import("./Friends/Friends"));
const Friend = React.lazy(() => import("./Friends/Friend/Friend"));
const User = React.lazy(() => import("./User/User"));
const Messages = React.lazy(() => import("./Messages/Messages"));
const MessageDialog = React.lazy(() =>
  import("./Messages/MessageDialog/MessageDialog")
);

const App = props => {
  return (
    <div className="app">
      <div className="header">
        <Header />
      </div>
      {props.isLogged ? <Redirect to="/" /> : <LogIn />}
      <div className="main">
        <nav className="navbar">
          <Navbar />
        </nav>
        <div className="content">
          <Switch>
            <Route exact path="/" render={() => <Profile />} />
            <Route exact path="/settings" render={withSuspense(Settings)} />
            <Route exact path="/users/:id" render={withSuspense(User)} />
            <Route exact path="/users" render={() => <Users />} />
            <Route exact path="/friends" render={withSuspense(Friends)} />
            <Route exact path="/friends/:id" render={withSuspense(Friend)} />
            <Route exact path="/messages" render={withSuspense(Messages)} />
            <Route
              exact
              path="/messages/:id"
              render={withSuspense(MessageDialog)}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
};

const AppWithRouter = withRouter(App);
const AppContainer = connect(state => ({
  isLogged: state.logIn.isLogged
}))(AppWithRouter);
export default AppContainer;
