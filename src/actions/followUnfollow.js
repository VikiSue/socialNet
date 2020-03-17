import { FOLLOW, UNFOLLOW } from "./../types/types";


export const followUser = (selectedUser) => {
  return {
    type: FOLLOW,
    payload: {
      ...selectedUser,
      follow: true
    }
  };
};

export const unFollowUser = (selectedUser) => {
  return {
    type: UNFOLLOW,
    payload: {
      ...selectedUser,
      follow: false
    }
  };
};

