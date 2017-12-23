import reducers from '../../../src/reducers/index'
import * as types from '../../../src/actions/type'

describe('Testing Users reducer', () => {
    describe('Testing FETCH_USERS', () => {
        it('should return the initial state', () => {
            console.log('REDUCERS HERE !!!!', reducers.users);
            expect(reducers.users(undefined, {})).toEqual(
                {
                    "error": null,
                    "list": [],
                    "loading": false,
                    "page": 1,
                    "refreshing": false,
                    "seed": 1
                }
            )
        });
        it('should handle FETCH_USERS refreshing when no previous seed', () => {
            let state = reducers.users({}, {
                type: types.FETCH_USERS,
                data: {
                    "error": null,
                    "list": [{}],
                    "page": 3,
                    "seed": 42
                }
            });
            expect(state).toEqual({
                "loading": true,
                "page": 3,
                "refreshing": true,
                "seed": 42
            })
        });
        it('should handle FETCH_USERS not refreshing when same seed', () => {
            let state = reducers.users({"seed": 42}, {
                type: types.FETCH_USERS,
                data: {
                    "error": null,
                    "list": [{}],
                    "page": 3,
                    "seed": 42
                }
            });
            expect(state).toEqual({
                "loading": true,
                "page": 3,
                "refreshing": false,
                "seed": 42
            })
        });
        it('should handle FETCH_USERS refreshing when different seed', () => {
            let state = reducers.users({"seed": 41}, {
                type: types.FETCH_USERS,
                data: {
                    "error": null,
                    "list": [{}],
                    "page": 3,
                    "seed": 42
                }
            });
            expect(state).toEqual({
                "loading": true,
                "page": 3,
                "refreshing": true,
                "seed": 42
            })
        });
    });
    describe('Testing FETCH_USERS_SUCCESS', () => {
        it('should overwrite list when on page 1', () => {
            let state = reducers.users({page: 1, seed: 42, list: [{test: 0}]}, {
                type: types.FETCH_USERS_SUCCESS,
                data: {
                    "list": [{test: 1}, {test:2}],
                }
            });
            expect(state).toEqual({
                list: [{test: 1}, {test:2}],
                error: null,
                "page": 1,
                "loading": false,
                "refreshing": false,
                "seed": 42
            })
        });
        it('should append list when on another page ', () => {
            let state = reducers.users({page: 2, seed: 42, list: [{test: 0}]}, {
                type: types.FETCH_USERS_SUCCESS,
                data: {
                    "list": [{test: 1}, {test:2}],
                }
            });
            expect(state).toEqual({
                list: [{test: 0}, {test: 1}, {test:2}],
                error: null,
                "page": 2,
                "loading": false,
                "refreshing": false,
                "seed": 42
            })
        });
        it('should not change list when receiving no list', () => {
            let state = reducers.users({page: 2, seed: 42, list: [{test: 0}]}, {
                type: types.FETCH_USERS_SUCCESS,
                data: {
                }
            });
            expect(state).toEqual({
                list: [{test: 0}],
                error: null,
                "page": 2,
                "loading": false,
                "refreshing": false,
                "seed": 42
            })
        });
    });
    describe('Testing FETCH_USERS_FAILURE', () => {
        it('should set error and stop loading and refresh', () => {
            let state = reducers.users({page: 1, seed: 42, list: [{test: 0}]}, {
                type: types.FETCH_USERS_FAILURE,
                error: 'this is a error'
            });
            expect(state).toEqual({
                list: [{test: 0}],
                error: 'this is a error',
                "page": 1,
                "loading": false,
                "refreshing": false,
                "seed": 42
            })
        });


    });
});