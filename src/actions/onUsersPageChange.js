import { SET_CURRENT_PAGE } from "./../types/types";

export const onUsersPageChange = currentPage => {
  return { type: SET_CURRENT_PAGE, payload: currentPage };
};
