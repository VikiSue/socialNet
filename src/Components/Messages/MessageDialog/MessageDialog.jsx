import React from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";

const MessageDialog = ({ match, friendsMessages, myMessages, myPhoto }) => {
  const id = match.params.id;

  const dialog = friendsMessages.filter(item => item.id == id)[0];
  const myDialogs = myMessages.filter(item => item.id == id)[0];
  const dialogs = myDialogs
    ? [...dialog.messages, ...myDialogs.messages]
    : [...dialog.messages];
  const conversation = dialogs.sort((a, b) =>
    a.date.split("/").reverse() > b.date.split("/").reverse() ? 1 : -1
  );
  console.log(dialog);

  return (
    <div className="dialogs">
      <div className="dialogs__header">
        <div className="dialogs__photo">
          <img src={dialog.img} alt="photo" className="dialogs__img" />
        </div>
        <div className="dialogs__name">{dialog.from}</div>
        <p className={dialog.online ? "dialogs__online" : "hidden"}>online</p>
        <p className={dialog.online ? "hidden" : "dialogs__offline"}>offline</p>
      </div>
      <ul className="dialogs__list">
        {conversation.map(item => (
          <li
            key={item.date}
            className={item.mine ? "dialogs__my" : "dialogs__outcome"}
          >
            <div
              className={
                item.mine ? "hidden" : "dialogs__photo  dialogs__photo--message"
              }
            >
              <img src={dialog.img} alt="photo" className="dialogs__img" />
            </div>
            <div
              className={
                item.mine ? "dialogs__info dialogs__info--my" : "dialogs__info "
              }
            >
              <div className="dialogs__date">{item.date}</div>
              <div className="dialogs__text">{item.text}</div>
            </div>
            <div
              className={
                !item.mine ? "hidden" : "dialogs__photo dialogs__photo--message"
              }
            >
              <img src={myPhoto} alt="photo" className="dialogs__img" />
            </div>
          </li>
        ))}
      </ul>
     {/* <form className="dialogs__form">
        <textarea className="dialogs__textarea" />
        <button className="btn">SEND</button>
      </form>*/}
    </div>
  );
};

const MessageDialogWithRouter = withRouter(MessageDialog);
const MessageContainer = connect(state => ({
  friendsMessages: state.messages.friendsMessages,
  myMessages: state.messages.myMessages,
  myPhoto: state.profile.photo
}))(MessageDialogWithRouter);

export default MessageContainer;
