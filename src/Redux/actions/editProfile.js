import {
  GET_PROFILE_EDITED_REQUES,
  GET_PROFILE_EDITED_FAILURE,
  GET_PROFILE_EDITED_SUCCESS
} from "../../types/types";
import { callApi } from "../../services/callApi";

export const editProfile = (
  firstName,
  lastName,
  country,
  city,
  email,
  cell,
  birthday
) => dispatch => {
  dispatch({ type: GET_PROFILE_EDITED_REQUES });

  callApi()
    .then(result =>
      dispatch({
        type: GET_PROFILE_EDITED_SUCCESS,
        payload: {
          firstName: firstName,
          lastName: lastName,
          country: country,
          city: city,
          email: email,
          cell: cell,
          birthday: birthday
        }
      })
    )
    .catch(err => {
      dispatch({ type: GET_PROFILE_EDITED_FAILURE, err });
    });
};
