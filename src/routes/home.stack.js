import {StackNavigator} from 'react-navigation';

import HomeRoute from './home.route';
import DetailsRoute from './details.route';


export default HomeStack = StackNavigator({
    ...HomeRoute,
    ...DetailsRoute
});