import {Platform} from 'react-native';

import HomeScreen from '../screens/home';
import DetailsScreen from '../screens/details'
import {tabs} from "../assets/styles";

export default HomeRoute = {
    Home: {
        screen: HomeScreen,
        navigationOptions: ({navigation}) => ({
            ...tabs.item,
            title: 'Home',
            header: (Platform.OS === 'android') ? null : navigation.header,
        })
    },
    Details: {
        screen: DetailsScreen,
        navigationOptions: ({navigation}) => ({
            ...tabs.item,
            title: 'Details'
        })
    }
};