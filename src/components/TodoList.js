import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';


class TodoList extends Component {
    render() {
        const { headerContainer, headerText, headerTab, headerTabContainer } = styles;
        return (
            <View style={todoContainer}>
                <Text style={item}>Plan</Text>
                <Text style={item}>Ahop</Text>
                <Text style={item}>Walk</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({});

export default TodoList;