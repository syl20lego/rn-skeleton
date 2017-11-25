import {FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE} from './type';

export const fetchUsers = (page, seed) => {
    return {
        type: FETCH_USERS,
        data: {
            page,
            seed
        }
    };
};

export const fetchUsersSuccess = (data) => {
    return {
        type: FETCH_USERS_SUCCESS,
        data
    };
};

export const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        error
    };
};