import {
    GET_PHOTO_FETCH_REQUEST,
    GET_PHOTO_FETCH_FAILURE,
    GET_PHOTO_FETCH_SUCCESS
} from "../types/types";

import {fetchPhotosList} from "../services/fetchPhotosList";


export const fetchPhoto = () => dispatch => {
    dispatch({ type: GET_PHOTO_FETCH_REQUEST });
    fetchPhotosList()
        .then(result =>
            dispatch({
                type: GET_PHOTO_FETCH_SUCCESS,
                payload: result.results.sort((a, b) => a.created_at > b.created_at ? 1 : -1)
            })
        )
        .catch(err => {
            dispatch({ type: GET_PHOTO_FETCH_FAILURE, err });
        });
};
