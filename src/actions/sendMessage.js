import {
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILURE
} from "./../types/types";
import { callApi } from "../services/callApi";

var d = new Date();

var datestring =
  d.getFullYear() + "-" + "0" + (d.getMonth() + 1) + "-" + d.getDate();

const answers = [
  { date: datestring, text: "I love my bed, but I'd rather be in yours." },
  {
    date: datestring,
    text: "Back in 5 minutes (If not, read this status again)."
  },
  { date: datestring, text: "Sometimes I prefer to use my face as emoticons." },
  {
    date: datestring,
    text:
      "It hurts when you go to unfriend someone, and you find they've beaten you to it!"
  },
  { date: datestring, text: "Food is an important part of a balanced diet." },
  {
    date: datestring,
    text: "At first, I didn't like my beard; then it grew on me."
  }
];



export const sendMessage = (username, password) => dispatch => {
  dispatch({ type:  SEND_MESSAGE_REQUEST });

  callApi(username, password)
      .then(result =>
          dispatch({
            type: SEND_MESSAGE_SUCCESS,
            payload: {
              username: username,
              password: password
            }
          })
      )
      .catch(err => {
        dispatch({ type: SEND_MESSAGE_FAILURE, err });
      });
};