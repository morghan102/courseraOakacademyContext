import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';


class TodoList extends Component {
    render() {
        const { todoContainer, item } = styles;
        return (
            <View style={todoContainer}>
                <Text style={item}>Plan</Text>
                <Text style={item}>Ahop</Text>
                <Text style={item}>Walk</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    todoContainer: {
        backgroundColor: 'dimgrey',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    item: {
        color: 'white',
        fontSize: 18,
        paddingVertical: 10
    }
});

export default TodoList;