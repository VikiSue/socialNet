import {FOLLOW_FRIENDS, UNFOLLOW_FRIENDS } from './../types/types';
import {followOption} from "../services/followOption";

export const followFriends = (id) => followOption(FOLLOW_FRIENDS, id);
export const unFollowFriends = (id) => followOption(UNFOLLOW_FRIENDS, id);