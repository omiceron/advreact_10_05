import {observable, computed, action} from 'mobx'
import firebase from 'firebase/app'

export default class EventsStore {
  constructor(navigationStore) {
    this.navigationStore = navigationStore
  }

  @observable entities = []
  @observable loading = false
  @observable loaded = false


  @action setEvents = (snapshot) => {
    this.entities = Object.entries(snapshot.val()).map(([uid, person]) => ({...person, uid}))
    this.loaded = true
    this.loading = false
  }

  @action fetchEvents = () => {
    this.loading = true
    firebase.database()
      .ref('events')
      .once('value')
      .then(this.setEvents)
      .catch(console.error)
  }
}