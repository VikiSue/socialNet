import {GET_PROFILE_STATUS_CHANGED} from "../../types/types";

export const onStatusChange = (text) => {
    return { type: GET_PROFILE_STATUS_CHANGED, payload: text };
};