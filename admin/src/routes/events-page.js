import React, { Component } from 'react'
import EventsTable from '../components/events/virtualized-lazy-table'
import SelectedEvents from '../components/events/selected-events'
import Trash from '../components/common/trash'
import PeopleList from '../components/people/people-list'

class EventsPage extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <PeopleList />
        <Trash />
        <SelectedEvents />
        <EventsTable />
      </div>
    )
  }
}

export default EventsPage
