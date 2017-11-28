import React from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';

import HomeStack from './home.stack';
import InfoStack from './info.stack';
import SettingsStack from './settings.stack';
import * as css from "../assets/styles";


const tabIcon = ({ focused, tintColor }, name) =>{
    return <Icon name={name} size={25} color={tintColor}/>
};

const Tabs = TabNavigator(

    {
        HomeTab: {
            screen: HomeStack,
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: (state) => tabIcon(state, 'list'),
            }
        },
        InfoTab: {
            screen: InfoStack,
            navigationOptions: {
                tabBarLabel: 'Info',
                tabBarIcon: (state) => tabIcon(state, 'account-circle'),
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