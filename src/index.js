import React, {Component} from 'react';
import {BackHandler} from 'react-native';
import {connect} from 'react-redux';
import {addNavigationHelpers, NavigationActions} from 'react-navigation';
import {
    createReduxBoundAddListener,
    createReactNavigationReduxMiddleware,
  } from 'react-navigation-redux-helpers';

import Navigator from './routes';

// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
  );
  const addListener = createReduxBoundAddListener("root");

  
class AppWithNavigation extends Component {

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }

    onBackPress = () => {
        const {dispatch, navigator} = this.props;
        const selectedTab = navigator.routes[navigator.index];
        const screens = selectedTab.routes[selectedTab.index];
        // This depends on your routes structure
        if (selectedTab.index===0 && screens.index === 0) {
            return false;
        }
        dispatch(NavigationActions.back());
        return true;
    };

    render() {
        const { dispatch, navigator } = this.props;
        return (
            <Navigator
                navigation={
                    addNavigationHelpers({
                        dispatch,
                        state: navigator,
                        addListener
                    })
                }
            />
        )
    }
}

const mapStateToProps = state => ({
    navigator: state.navigator,
});

export default Application = connect(mapStateToProps)(AppWithNavigation);