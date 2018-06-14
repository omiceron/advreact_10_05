import React, { Component } from 'react'
import {Text, StyleSheet} from 'react-native'
import Card from './common/card'

class EventCard extends Component {
  static propTypes = {

  };

  render() {
    const { event } = this.props
    return (
      <Card onPress = {() => alert(event.title)}>
        <Text style = {styles.item}>{event.title}</Text>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  item : {
    margin: 5,
    fontSize: 15,
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: 'HelveticaNeue-Light',
  }
})

export default EventCard