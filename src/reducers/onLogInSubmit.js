import {
  GET_LOG_IN_REQUEST,
  GET_LOG_IN_FAILURE,
  GET_LOG_IN_SUCCESS,
  GET_LOG_OUT
} from "../types/types";

const initialValue = {
  username: "",
  password: "",
  isLoading: false,
  isLogged: false
};

export const onLogInSubmit = (state = initialValue, action) => {
  switch (action.type) {
    case GET_LOG_IN_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case GET_LOG_IN_SUCCESS:
      return {

        ...action.payload,
        isLoading: false,
        isLogged: true
      };
    case GET_LOG_IN_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case GET_LOG_OUT:
      return {
        username: "",
        password: "",
        isLogged: false,
        isLoading: false
      };
    default:
      return state;
  }
};
