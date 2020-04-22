import React from "react";
import { connect } from "react-redux";
import { onLogOut } from "../../Redux/actions/onLogOut";
import logo from "../../img/logo.png";
import '../../scss/styles.scss';

const Header = props => {

  return (
    <div className="header__content">
      <div className="logo">
        <h3>
          <span className="gray">In</span>
          <span className="red">Crowd</span>
        </h3>
          <div className='logo__img'>
            <img src={logo} alt='logo'  className='logo__png'/>
          </div>

      </div>
      <div className={props.isLogged ? "header__logOut" : "hidden"}>
        <div className="textS"> {props.username}</div>
        <button className="btn btns" onClick={props.onLogOut}>
          Log out
        </button>
      </div>
    </div>
  );
};

const HeaderContainer = connect(
  state => ({
    username: state.logIn.username,
    isLogged: state.logIn.isLogged
  }),
  { onLogOut }
)(Header);
export default HeaderContainer;
