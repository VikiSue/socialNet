import {
  GET_FRIENDS_FETCH_REQUEST,
  GET_FRIENDS_FETCH_FAILURE,
  GET_FRIENDS_FETCH_SUCCESS,
  FOLLOW_FRIENDS, UNFOLLOW_FRIENDS
} from "../types/types";

const initialValue = {
  friends: [],
  isLoading: false
};

export const onFriendsFetch = (state = initialValue, action) => {
  switch (action.type) {
    case GET_FRIENDS_FETCH_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case GET_FRIENDS_FETCH_SUCCESS:
      return {
        ...state,
        friends: action.payload.users,
        isLoading: false
      };
    case GET_FRIENDS_FETCH_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case FOLLOW_FRIENDS:
      const newFriends = [...state.friends];
          const friend = newFriends.find(
        item => item.id == action.payload.id
      );
      friend.follow = false;
      return {
        ...state,
        friends: [...newFriends]
      };
    case UNFOLLOW_FRIENDS:
      const friends = [...state.friends];
      const selectedFriend = friends.find(
          item => item.id == action.payload.id
      );
      selectedFriend.follow = false;
      return {
        ...state,
        friends: [...friends]
      };
    default:
      return state;
  }
};
