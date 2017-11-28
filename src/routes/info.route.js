import {Platform} from 'react-native';

import InfoScreen from '../screens/info.screen';
import {tabs} from "../assets/styles";

export default InfoRoute = {
    Info: {
        screen: InfoScreen,
        navigationOptions: ({navigation}) => ({
            ...tabs.item,
            title: 'Info',
            header: (Platform.OS === 'android') ? null : navigation.header,
        })
    }
};