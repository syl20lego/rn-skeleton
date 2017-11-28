import {Platform} from 'react-native';

import HomeScreen from '../screens/home.screen';
import * as css from "../assets/styles";

export default HomeRoute = {
    Home: {
        screen: HomeScreen,
        navigationOptions: ({navigation}) => ({
            ...css.tabs.item,
            title: 'Home',
            header: (Platform.OS === 'android') ? null : navigation.header,
        })
    }
};