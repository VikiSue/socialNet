import React from "react";
import LogInForm from "./Form/LogInForm";
import { onLogIn } from "../../actions/onLogIn";
import { connect } from "react-redux";
import Loader from "../reusableComponents/Loader/Loader";

const LogIn = props => {
  const onSubmit = values => {

    props.onLogIn(values.username, values.password);
  };
  return (
    <div className='logIn'>
      {props.isLoading ? <Loader /> : <LogInForm onSubmit={onSubmit} />}
    </div>
  );
};
const LogInContainer = connect(
  state => ({ isLoading: state.logIn.isLoading,
  login: state.login}),
  { onLogIn }
)(LogIn);

export default LogInContainer;
