import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { onLogInSubmit } from "../reducers/onLogInSubmit";
import { GET_LOG_IN_SUCCESS } from "../../types/types";
import { onUsersFetch } from "../reducers/onUsersFetch";
import { onProfileEdit } from "../reducers/onProfileEdit";
import {onPhotoFetch} from "../reducers/onFhotoFetch";
import {onNewPostAdding} from "../reducers/onNewPostAdding";
import {onMessageAdd} from "../reducers/onMessageAdd";
import {onFriendsFetch} from "../reducers/onFriendsFetch";


export const rootReducer = combineReducers({
  form: formReducer.plugin({
    login: (state, action) => {
      switch (action.type) {
        case GET_LOG_IN_SUCCESS:
          return undefined;
        default:
          return state;
      }
    }
  }),
  logIn: onLogInSubmit,
  users: onUsersFetch,
  profile: onProfileEdit,
  photos: onPhotoFetch,
  posts: onNewPostAdding,
  messages: onMessageAdd,
  friends: onFriendsFetch,
});
