import {Platform} from 'react-native';

import SettingsScreen from '../screens/settings';
import {tabs} from "../assets/styles";

export default SettinsRoute = {
    Profile: {
        screen: SettingsScreen,
        navigationOptions: ({navigation}) => ({
            ...tabs.item,
            title: 'Info',
            header: (Platform.OS === 'android') ? null : navigation.header,
        })
    }
};