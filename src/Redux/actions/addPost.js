import { ADD_NEW_POST } from "../../types/types";

export const addPost = text => {
  var d = new Date();

  var datestring = d.getFullYear() + "-" + "0" + (d.getMonth()+1) + "-" + d.getDate();
  return {
    type: ADD_NEW_POST,
    payload: {
      date: datestring,
      text: text,
      photo: "",
      id: Date.now()
    }
  };
};
