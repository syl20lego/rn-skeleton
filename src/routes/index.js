import React from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';

import HomeRoute from './home.route';
import ProfileRoute from './profile.route';
import SettingsRoute from './settings.route';
import * as css from "../assets/styles";

export const HomeStack = StackNavigator({
    ...HomeRoute
});

const InfoStack = StackNavigator({
    ...ProfileRoute
});

export const SettingsStack = StackNavigator({
    ...SettingsRoute
});

const Tabs = TabNavigator(
    {
        HomeTab: {
            screen: HomeStack,
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: ({tintColor}) => <Icon name="list" size={25} color={tintColor}/>,
            }
        },
        InfoTab: {
            screen: InfoStack,
            navigationOptions: {
                tabBarLabel: 'Info',
                tabBarIcon: ({tintColor}) => <Icon name="account-circle" size={25} color={tintColor}/>
            }
        }
    }, {
        // Android we can force TabBar bottom
        // tabBarComponent: TabBarBottom,
        // tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: css.tabs.container
    }
);

export default Navigator = StackNavigator(
    {
        Tabs: {
            screen: Tabs
        },
        Settings: {
            screen: SettingsStack
        }
    }, {
        mode: 'modal',
        headerMode: 'none'
    }
);