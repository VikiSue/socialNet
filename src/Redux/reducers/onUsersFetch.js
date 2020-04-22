import {
  GET_USERS_FETCH_REQUEST,
  GET_USERS_FETCH_FAILURE,
  GET_USERS_FETCH_SUCCESS,
  SET_CURRENT_PAGE,
  FOLLOW,
  UNFOLLOW
} from "../../types/types";

const initialValue = {
  users: [],
  currentPage: 1,
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

    case FOLLOW:
      const newUsers = [...state.users];
      const user = newUsers.find(item => item.id == action.payload.id);
      user.follow = true;
      return {
        ...state,
       users: [...newUsers]
      };
    case UNFOLLOW:
      const newUsersList = [...state.users];
      const selectedUser = newUsersList.find(item => item.id == action.payload.id);
      selectedUser.follow = false;
      return {
        ...state,
        users: [...newUsersList]
      };
    default:
      return state;
  }
};
