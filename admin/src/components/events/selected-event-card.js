import React, { Component } from 'react'
import { DropTarget, DragSource } from 'react-dnd'
import { connect } from 'react-redux'
import { addEventToPerson, peopleSelector } from '../../ducks/people'

class SelectedEventCard extends Component {
  static propTypes = {}

  render() {
    const {
      event,
      connectDropTarget,
      canReceive,
      hovered,
      connectDragSource
    } = this.props
    const borderColor = canReceive ? (hovered ? 'green' : 'red') : 'black'
    return connectDropTarget(
      <div style={{ border: `1px solid ${borderColor}` }}>
        {connectDragSource(<h3>{event.title}</h3>)}
        <h4>{event.where}</h4>
      </div>
    )
  }
}

const spec = {
  drop(props, monitor) {
    const { addEventToPerson, event } = props
    addEventToPerson(event.uid, monitor.getItem().uid)
  }
}

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  canReceive: monitor.canDrop(),
  hovered: monitor.isOver()
})

const specSource = {
  beginDrag(props) {
    return {
      uid: props.event.uid
    }
  }
}

const collectSource = (connect, monitor) => ({
  connectDragSource: connect.dragSource()
})

export default connect(
  (state, props) => {
    return {
      people: peopleSelector(state).filter((person) =>
        person.events.includes(props.event.uid)
      )
    }
  },
  { addEventToPerson }
)(
  DropTarget(['person'], spec, collect)(
    DragSource('event', specSource, collectSource)(SelectedEventCard)
  )
)
