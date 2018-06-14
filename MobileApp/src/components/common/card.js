import React, { Component } from 'react'
import {View, StyleSheet, TouchableOpacity} from 'react-native'

class Card extends Component {
    static propTypes = {

    };

    render() {
        return (
            <TouchableOpacity onPress = {this.props.onPress}>
                {this.props.children}
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FEFEFE',
        elevation: 5,
        marginTop: 10,
        marginBottom: 10,
        padding: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 2, height: 2
        },
        shadowOpacity: 0.5
    }
})

export default Card