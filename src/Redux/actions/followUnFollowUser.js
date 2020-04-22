import { FOLLOW, UNFOLLOW} from "../../types/types";
import {followOption} from "../../services/followOption";


export const followUser = (id) => followOption(FOLLOW, id);
export const unFollowUser = (id) => followOption(UNFOLLOW, id);


