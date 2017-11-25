import reducers from '../index'
import * as types from '../../actions/type'

describe('Testing Users reducer', () => {
    describe('Testing fetch Users', () => {
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
    describe('Testing fetch success', () => {
        it('should handle FETCH_USERS refreshing when different seed', () => {
            //...
        });
    });
});