import React from "react";
import LogInFormRedux from "./Form/LogInForm";
import { onLogIn } from "../../actions/onLogIn";
import { connect } from "react-redux";
import Loader from "../Loader/Loader";

const LogIn = props => {
    console.log("state", props.login);
  const onSubmit = values => {
    props.onLogIn(values.username, values.password);
  };
  return (
    <div className='logIn'>
      {props.isLoading ? <Loader /> : <LogInFormRedux onSubmit={onSubmit} />}
    </div>
  );
};
const LogInContainer = connect(
  state => ({ isLoading: state.logIn.isLoading,
  login: state.login}),
  { onLogIn }
)(LogIn);

export default LogInContainer;
