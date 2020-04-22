import {
  GET_LOG_IN_REQUEST,
  GET_LOG_IN_FAILURE,
  GET_LOG_IN_SUCCESS
} from "../../types/types";
import { callApi } from "../../services/callApi";

export const onLogIn = (username, password) => dispatch => {
  dispatch({ type: GET_LOG_IN_REQUEST });

  callApi(username, password)
    .then(result =>
      dispatch({
        type: GET_LOG_IN_SUCCESS,
        payload: {
          username: username,
          password: password
        }
      })
    )
    .catch(err => {
      dispatch({ type: GET_LOG_IN_FAILURE, err });
    });
};
