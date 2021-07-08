import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { ThemeContext } from '../contexts/ThemeContext';


class Navbar extends Component {
    static contextType = ThemeContext;
    render() {
        const { isDarkTheme, darkTheme, lightTheme } = this.context;

        const theme = isDarkTheme ? darkTheme : lightTheme;

        const { headerContainer, headerText, headerTab, headerTabContainer } = styles;
        return (
            <View style={[headerContainer, theme]}>
                <Text style={[headerText, theme]}>OakAcademy</Text>
                <View style={headerTabContainer}>
                    <Text style={headerTab}>Overview</Text>
                    <Text style={headerTab}>Contact</Text>
                    <Text style={headerTab}>Support</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: 'dimgrey',
        height: 200,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 25,
    },
    headerText: {
        marginTop: 25,
        fontSize: 26,
        color: 'white',
    },
    headerTabContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 25,
        backgroundColor: 'lightgrey',
        alignSelf: 'flex-end'
    },
    headerTab: {
        fontSize: 22,
        paddingVertical: 10
    }
});

export default Navbar;