import {
  GET_USERS_FETCH_REQUEST,
  GET_USERS_FETCH_FAILURE,
  GET_USERS_FETCH_SUCCESS
} from "../types/types";

import { fetchUsersList } from "../services/fetchUsersList";

export const fetchUsers = (num) => dispatch => {
  dispatch({ type: GET_USERS_FETCH_REQUEST });
  fetchUsersList(num)
    .then(result =>
      dispatch({
        type: GET_USERS_FETCH_SUCCESS,
        payload: { users: result.results, currentPage: num}
      })
    )
    .catch(err => {
      dispatch({ type: GET_USERS_FETCH_FAILURE, err });
    });
};
