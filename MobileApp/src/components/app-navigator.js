import {createStackNavigator, createBottomTabNavigator} from 'react-navigation'
import AuthScreen from './screens/auth'
import EventListScreen from './screens/event-list'
import EventScreen from './screens/event'
import Loader from './common/loader'

/*export default createStackNavigator({
    auth: {
        screen: AuthScreen
    },
    eventList: {
        screen: EventListScreen
    },
    event: {
        screen: EventScreen
    }
})*/

export default createBottomTabNavigator({
  auth: {
    screen: AuthScreen
  },
  eventList: {
    screen: EventListScreen
  },
  event: {
    screen: EventScreen
  },
  loader: {
      screen: Loader
  }
});