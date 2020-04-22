import {
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILURE
} from "../../types/types";
import { callApi } from "../../services/callApi";
import moment from "moment";

const answers = [
  {
    date: moment().format("HH:mm:ss  DD/MM/YYYY"),
    text: "I love my bed, but I'd rather be in yours."
  },
  {
    date: moment().format("hh:mm:ss  DD/MM/YYYY"),
    text: "Back in 5 minutes (If not, read this status again)."
  },
  {
    date: moment().format("hh:mm:ss  DD/MM/YYYY"),
    text: "Sometimes I prefer to use my face as emoticons."
  },
  {
    date: moment().format("hh:mm:ss  DD/MM/YYYY"),
    text:
      "It hurts when you go to unfriend someone, and you find they've beaten you to it!"
  },
  {
    date: moment().format("hh:mm:ss  DD/MM/YYYY"),
    text: "Food is an important part of a balanced diet."
  },
  {
    date: moment().format("hh:mm:ss  DD/MM/YYYY"),
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
            date: moment().format("HH:mm:ss  DD/MM/YYYY"),
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
