import React, { useCallback, useEffect, useState} from "react";

export const useMessageDialog = (friendsMessages, myMessages, id) => {
  const [textInput, setTextInput] = useState("");
  const [conversation, setConversation] = useState([]);
  const dialog = friendsMessages.filter(item => item.id == id)[0];


  useEffect(() => {
    const myDialogs = myMessages.filter(item => item.id == id)[0];
    const dialogs = myDialogs
      ? [...dialog.messages, ...myDialogs.messages]
      : [...dialog.messages];
    const allConversation = dialogs.sort((a, b) =>
      a.date.split("/" || " ").reverse() > b.date.split("/" || " ").reverse() ? 1 : -1
    );

    setConversation(allConversation);

  }, [friendsMessages, myMessages]);

  const handleInput = useCallback(
    e => {
      const text = e.target.value;
      setTextInput(text);
    },
    [textInput]
  );
  const handleSendMessage  = useCallback(e => {

    setTextInput("");
  }, [textInput]);

  return {
    handleInput,
    handleSendMessage,
    conversation,
    dialog,
    textInput,

  };
};
