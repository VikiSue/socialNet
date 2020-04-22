import { ADD_NEW_POST } from "../../types/types";
import moment from "moment";

export const addPost = text => {


  return {
    type: ADD_NEW_POST,
    payload: {
      date: moment().format('YYYY-MM-DD'),
      text: text,
      photo: "",
      id: Date.now()
    }
  };
};
