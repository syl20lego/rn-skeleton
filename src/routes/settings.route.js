import React from 'react';
import {Icon} from 'react-native-elements';
import { NavigationActions } from 'react-navigation'

import SettingsScreen from '../screens/settings.screen';
import * as css from "../assets/styles";

export default SettinsRoute = {
    Settings: {
        screen: SettingsScreen,
        navigationOptions: ({navigation}) => ({
            ...css.tabs.item,
            title: 'Info',
            headerRight: (
                <Icon
                    name='done'
                    iconStyle={padding=5}
                    color={css.colors.textPrimaryColor}
                    underlayColor={css.colors.primaryDarkColor}
                    onPress={() => navigation.dispatch(NavigationActions.back())}
                />
            )
        })
    }
};