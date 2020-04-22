import React from "react";
import { connect } from "react-redux";
import { sendMessage } from "../../Redux/actions/sendMessage";
import { NavLink, withRouter } from "react-router-dom";

const Messages = ({ isLoading, friendsMessages, myMessages }) => {

  return (
    <div className="messages">
      <ul className="messages__list">
        {friendsMessages.map(item => (
          <li key={item.id} className="messages__item">
            <NavLink
              exact
              to={`/messages/${item.id}`}
              onClick={() => {}}
              className="messages__link"
            >
              <div className="messages__photo">
                <img src={item.img} alt="photo" className="messages__img" />
              </div>
                <div className="messages__info">
              <p className="messages__name">{item.from}</p>
              <p className={item.online ? "messages__online" : "hidden"}>
                online
              </p>
              <p className={item.online ? "hidden" : "messages__offline"}>
                offline
              </p>
                </div>
              <div className="messages__message">
                <div className="messages__date">
                  {item.messages[item.messages.length - 1].date}
                </div>
                <div className="messages__lastMessage">
                  {item.messages[item.messages.length - 1].text}
                </div>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

const MessagesWithRouter = withRouter(Messages);
const MessagesContainer = connect(
  state => ({
    isLoading: state.messages,
    friendsMessages: state.messages.friendsMessages,
    myMessages: state.messages.myMessages
  }),
  { sendMessage }
)(MessagesWithRouter);

export default MessagesContainer;
