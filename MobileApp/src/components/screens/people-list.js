import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import PeopleList from '../people/people-list'
import {observer, inject} from 'mobx-react'
import Loader from '../common/loader'

@inject('people')
@observer
class PeopleListScreen extends Component {
  static propTypes = {};

  componentDidMount() {
    if (this.props.people.loading || this.props.people.loaded) return
    this.props.people.fetchPeople()
  }

  render() {
    if (this.props.people.loading) return <Loader/>
    console.log(this.props.people.entities)
    return <PeopleList people={this.props.people.entities}/>
  }
}

const styles = StyleSheet.create({})

export default PeopleListScreen