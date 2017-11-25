import {ActionCreators} from '../index'
import * as types from '../type'

describe('Testing Users actions', () => {
    it('Should create an action to fetch users', () => {
        const page = 3;
        const seed = 'ABC';
        const expectedAction = {
            type: types.FETCH_USERS,
            data: {
                page,
                seed
            }
        };
        expect(ActionCreators.fetchUsers(page, seed)).toEqual(expectedAction)
    });

    it('Should create an action for success', () => {
        const data = { test: true};
        const expectedAction = {
            type: types.FETCH_USERS_SUCCESS,
            data
        };
        expect(ActionCreators.fetchUsersSuccess(data)).toEqual(expectedAction)

    });

    it('Should create an action for failure', () => {
        const error = { test: true};
        const expectedAction = {
            type: types.FETCH_USERS_FAILURE,
            error
        };
        expect(ActionCreators.fetchUsersFailure(error)).toEqual(expectedAction)

    });
});