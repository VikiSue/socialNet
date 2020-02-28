import {
    GET_PHOTO_FETCH_REQUEST,
    GET_PHOTO_FETCH_FAILURE,
    GET_PHOTO_FETCH_SUCCESS,
  } from "../types/types";

const initialValue = {
    photos: [],
    isLoading: false,
    selectedPhoto: {}
};

export const onPhotoFetch = (state = initialValue, action) => {
    switch (action.type) {
        case GET_PHOTO_FETCH_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case GET_PHOTO_FETCH_SUCCESS:
            return {
                ...state,
                photos: action.payload,
                isLoading: false
            };
        case GET_PHOTO_FETCH_FAILURE:
            return {
                ...state,
                isLoading: false
            };
        default:
            return state;
    }
};
