import {Platform} from 'react-native';

import ProfileScreen from '../screens/profile';
import {tabs} from "../assets/styles";

export default ProfileRoute = {
    Profile: {
        screen: ProfileScreen,
        navigationOptions: ({navigation}) => ({
            ...tabs.item,
            title: 'Info',
            header: (Platform.OS === 'android') ? null : navigation.header,
        })
    }
};