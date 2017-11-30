import {FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE} from '../actions/type';

const defaultState = {
    loading: false,
    list: [],
    page: 1,
    seed: 1,
    error: null,
    refreshing: false
};

export default reducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            const {page, seed} = action.data;
            return {
                ...state,
                page: page,
                seed: seed,
                loading : true,
                refreshing: state.seed !== seed
            };
        case FETCH_USERS_SUCCESS:
            const {list=[]} = action.data;
            return {
                ...state,
                list : state.page === 1 ? list : [...state.list, ...list],
                error: null,
                loading : false,
                refreshing: false
            };
        case FETCH_USERS_FAILURE:
            const {error} = action;
            return {
                ...state,
                error,
                loading : false,
                refreshing: false
            };
        default:
            return state;
    }
}