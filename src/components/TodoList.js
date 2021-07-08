import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import {ThemeContext} from '../contexts/ThemeContext';

class TodoList extends Component {
    static contextType = ThemeContext;

    render() {
        const { isDarkTheme, darkTheme, lightTheme } = this.context;
        const theme = isDarkTheme ? darkTheme : lightTheme;

        const { todoContainer, item } = styles;
        return (
            <View style={[todoContainer, theme]}>
                <Text style={[item, theme]}>Plan</Text>
                <Text style={[item, theme]}>Ahop</Text>
                <Text style={[item, theme]}>Walk</Text>
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