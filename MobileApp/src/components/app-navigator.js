import {createStackNavigator, createBottomTabNavigator} from 'react-navigation'
import AuthScreen from './screens/auth'
import ListNavigator from './list-navigator'

export default createStackNavigator({
    auth: {
        screen: AuthScreen
    },
    list: {
        screen: ListNavigator
    },
})