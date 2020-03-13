import { TOGGLE_FOLLOW } from "./../types/types";

export const toggleFollow = selectedUser => {
  return {
    type: TOGGLE_FOLLOW,
    payload: {
      ...selectedUser,
      follow: !selectedUser.follow
    }
  };
};
