import {
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILURE
} from "./../types/types";
import { callApi } from "../services/callApi";



const answers = [
  { date:   new Date().getHours() +
        ":" +
        new Date().getMinutes() +
        ":" +
        new Date().getSeconds() +
        "  " +
        new Date().getDate() +
        "/" +
        (new Date().getMonth() + 1) +
        "/" +
        new Date().getFullYear(), text: "I love my bed, but I'd rather be in yours." },
  {
    date:   new Date().getHours() +
    ":" +
    new Date().getMinutes() +
    ":" +
    new Date().getSeconds() +
    "  " +
    new Date().getDate() +
    "/" +
    (new Date().getMonth() + 1) +
    "/" +
    new Date().getFullYear(),
    text: "Back in 5 minutes (If not, read this status again)."
  },
  { date:   new Date().getHours() +
        ":" +
        new Date().getMinutes() +
        ":" +
        new Date().getSeconds() +
        "  " +
        new Date().getDate() +
        "/" +
        (new Date().getMonth() + 1) +
        "/" +
        new Date().getFullYear(), text: "Sometimes I prefer to use my face as emoticons." },
  {
    date:   new Date().getHours() +
    ":" +
    new Date().getMinutes() +
    ":" +
    new Date().getSeconds() +
    "  " +
    new Date().getDate() +
    "/" +
    (new Date().getMonth() + 1) +
    "/" +
    new Date().getFullYear(),
    text:
      "It hurts when you go to unfriend someone, and you find they've beaten you to it!"
  },
  { date:   new Date().getHours() +
  ":" +
  new Date().getMinutes() +
  ":" +
  new Date().getSeconds() +
  "  " +
  new Date().getDate() +
  "/" +
  (new Date().getMonth() + 1) +
  "/" +
  new Date().getFullYear(), text: "Food is an important part of a balanced diet." },
  {
    date:   new Date().getHours() +
    ":" +
    new Date().getMinutes() +
    ":" +
    new Date().getSeconds() +
    "  " +
    new Date().getDate() +
    "/" +
    (new Date().getMonth() + 1) +
    "/" +
    new Date().getFullYear(),
    text: "At first, I didn't like my beard; then it grew on me."
  }
];

export const sendMessage = (message, id) => dispatch => {
  dispatch({ type: SEND_MESSAGE_REQUEST });

  callApi(message)
    .then(result =>
      dispatch({
        type: SEND_MESSAGE_SUCCESS,
        payload: {
          message: {
            date:
              new Date().getHours() +
              ":" +
              new Date().getMinutes() +
              ":" +
              new Date().getSeconds() +
              "  " +
              new Date().getDate() +
              "/" +
              (new Date().getMonth() + 1) +
              "/" +
              new Date().getFullYear(),
            text: message,
            mine: "mine"
          },
          id: id
        }
      })
    )
    .catch(err => {
      dispatch({ type: SEND_MESSAGE_FAILURE, err });
    });
};
