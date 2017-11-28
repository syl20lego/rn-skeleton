import React  from 'react';
import {connect} from 'react-redux';

import HomeScreen from './home.screen';
import {ActionCreators} from '../../actions/index';

const mapStateToProps = (state) => {
    return {
        loading: state.users.loading,
        refreshing: state.users.refreshing,
        list: state.users.list,
        page: state.users.page,
        seed: state.users.seed,
        error: state.users.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (page, seed) => {
            dispatch(ActionCreators.fetchUsers(page, seed));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);