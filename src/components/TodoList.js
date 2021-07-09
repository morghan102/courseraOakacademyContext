import React, { useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { ThemeContext } from '../contexts/ThemeContext';

const TodoList = () => {
    const { isDarkTheme, darkTheme, lightTheme, changeTheme } = useContext(ThemeContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;

    const { todoContainer, item, buttonContainer, buttonText } = styles;

    return (
        <View style={[todoContainer, theme]}>
            <Text style={[item, theme]}>Plan</Text>
            <Text style={[item, theme]}>Shop</Text>
            <Text style={[item, theme]}>Walk</Text>
            <TouchableOpacity onPress={changeTheme} style={buttonContainer}>
                <Text style={buttonText}>Change Theme</Text>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    todoContainer: {
        backgroundColor: 'dimgrey',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    item: {
        color: '#fff',
        fontSize: 18,
        paddingVertical: 10
    },
    buttonContainer: {
        backgroundColor: 'dodgerblue',
        paddingVertical: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18
    }
});

export default TodoList;