import DetailsScreen from '../screens/details.screen'
import * as css from "../assets/styles";

export default DetailsRoute = {
    Details: {
        screen: DetailsScreen,
        navigationOptions: ({navigation}) => ({
            ...css.tabs.item,
            title: 'Details'
        })
    }
};