import {observable, computed, action} from 'mobx'
import firebase from 'firebase/app'

export default class PeopleStore {
  constructor(navigationStore) {
    this.navigationStore = navigationStore
  }

  @observable entities = []
  @observable loading = false
  @observable loaded = false


  @action setPeople = (snapshot) => {
    this.entities = Object.entries(snapshot.val()).map(([uid, event]) => ({...event, uid}))
    this.loaded = true
    this.loading = false
  }

  @action fetchPeople = () => {
    this.loading = true
    firebase.database()
      .ref('people')
      .once('value')
      .then(this.setPeople)
      .catch(console.error)
  }
}