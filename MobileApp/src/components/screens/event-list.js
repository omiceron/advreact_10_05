import React, { Component } from 'react'
import {View, StyleSheet} from 'react-native'
import EventList from '../events/event-list'
import {observer, inject} from 'mobx-react'
import Loader from '../common/loader'

@inject('events')
@observer
class EventListScreen extends Component {
    static propTypes = {

    };

  componentDidMount() {
      if (this.props.events.loading || this.props.events.loaded) return
      this.props.events.fetchEvents()
  }

    render() {
      if (this.props.events.loading) return <Loader/>
      return <EventList events={this.props.events.entities}/>
    }
}

const styles = StyleSheet.create({
})

export default EventListScreen