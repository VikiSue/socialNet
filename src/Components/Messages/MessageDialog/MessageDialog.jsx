import React from "react";
import { connect } from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import { useMessageDialog } from "./useMessageDialog";
import { sendMessage } from "../../../Redux/actions/sendMessage";
import Loader from "../../reusableComponents/Loader/Loader";
import ScrollToBottom from "react-scroll-to-bottom";
import LogIn from "../../LogIn/LogIn";

const MessageDialog = ({
    isLogged,
  match,
  friendsMessages,
  myMessages,
  myPhoto,
  sendMessage,
  isLoading
}) => {
  const id = match.params.id;
  const {
    handleInput,
    handleSendMessage,
    conversation,
    dialog,
    textInput
  } = useMessageDialog(friendsMessages, myMessages, id);

  const handleSend = e => {
    e.preventDefault();
    sendMessage(textInput, id);
    handleSendMessage();
  };

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
      {isLoading ? (
        <Loader />
      ) : (
        <ScrollToBottom className="dialogs__scroll">
          <ul className="dialogs__list">
            {conversation.map(item => (
              <li
                key={Math.random()}
                className={item.mine ? "dialogs__my" : "dialogs__outcome"}
              >
                <div
                  className={
                    item.mine
                      ? "hidden"
                      : "dialogs__photo  dialogs__photo--message"
                  }
                >
                  <img src={dialog.img} alt="photo" className="dialogs__img" />
                </div>
                <div
                  className={
                    item.mine
                      ? "dialogs__info dialogs__info--my"
                      : "dialogs__info "
                  }
                >
                  <div className="dialogs__date">{item.date}</div>
                  <div className="dialogs__text">{item.text}</div>
                </div>
                <div
                  className={
                    !item.mine
                      ? "hidden"
                      : "dialogs__photo dialogs__photo--message"
                  }
                >
                  <img src={myPhoto} alt="photo" className="dialogs__img" />
                </div>
              </li>
            ))}
          </ul>

          <form className={isLogged ? "dialogs__form" : "hidden"}>
            <input
              type="text"
              name="messageField"
              className="dialogs__input"
              onChange={handleInput}
              value={textInput}
            />
            <button className="btn dialogs__btn" onClick={handleSend} disabled={textInput.length === 0}>
              SEND
            </button>
          </form>
        </ScrollToBottom>
      )}
    </div>
  );
};

const MessageDialogWithRouter = withRouter(MessageDialog);

const MessageContainer = connect(
  state => ({
      isLogged: state.logIn.isLogged,
    friendsMessages: state.messages.friendsMessages,
    myMessages: state.messages.myMessages,
    isLoading: state.messages.isLoading,
    myPhoto: state.profile.photo
  }),
  { sendMessage }
)(MessageDialogWithRouter);

export default MessageContainer;
