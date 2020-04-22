import {
    GET_FRIENDS_FETCH_REQUEST,
    GET_FRIENDS_FETCH_FAILURE,
    GET_FRIENDS_FETCH_SUCCESS
} from "../../types/types";

import { fetchUsersList } from "../../services/fetchUsersList";



export const fetchFriends = () => dispatch => {
    dispatch({ type: GET_FRIENDS_FETCH_REQUEST });
    fetchUsersList()
        .then(result =>
            dispatch({
                type: GET_FRIENDS_FETCH_SUCCESS,
                payload: { users: result}
            })
        )
        .catch(err => {
            dispatch({ type: GET_FRIENDS_FETCH_FAILURE, err });
        });
};
