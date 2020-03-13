import {
  GET_USERS_FETCH_REQUEST,
  GET_USERS_FETCH_FAILURE,
  GET_USERS_FETCH_SUCCESS,
  SET_CURRENT_PAGE,
  GET_SELECTED_USER,
  TOGGLE_FOLLOW
} from "../types/types";

const initialValue = {
  users: [],
  isLoading: false,
  currentPage: 1,
  selectedUser: {}
};

export const onUsersFetch = (state = initialValue, action) => {
  switch (action.type) {
    case GET_USERS_FETCH_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case GET_USERS_FETCH_SUCCESS:
      return {
        ...state,
        users: action.payload.users,
        isLoading: false
      };
    case GET_USERS_FETCH_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      };
    case GET_SELECTED_USER:
      return {
        ...state,
        selectedUser: {...action.payload}
      };

    case  TOGGLE_FOLLOW:
      return {
        ...state,
        selectedUser: {...action.payload}

      };
    default:
      return state;
  }
};
