import '../config'

import UserStore from './user'
import EventsStore from './events'
import PeopleStore from './people'
import NavigationStore from './navigation'

export const navigationStore = new NavigationStore
export const userStore = new UserStore(navigationStore)
export const eventsStore = new EventsStore(navigationStore)
export const peopleStore = new PeopleStore(navigationStore)

export default {
  user: userStore,
  navigation: navigationStore,
  events: eventsStore,
  people: peopleStore
}