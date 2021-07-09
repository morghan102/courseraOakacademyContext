import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';


class Navbar extends Component {
    render() {

        const { headerContainer, headerText, headerTab, headerTabContainer } = styles;
        return (
            <AuthContext.Consumer>{(authContext) => {
                return (
                    <ThemeContext.Consumer>{(themeContext) => {
                        const { isDarkTheme, darkTheme, lightTheme } = themeContext;
                        const { isLoggedIn, changeAuthStatus } = authContext;
                        const theme = isDarkTheme ? darkTheme : lightTheme;

                        return (
                            <View style={[headerContainer, theme]}>
                                <Text style={[headerText, theme]}>OakAcademy</Text>
                                <TouchableOpacity onPress={changeAuthStatus}>
                                    <Text style={[headerText, theme]}>{isLoggedIn ? 'Logged In' : 'Logged Out'}</Text>
                                </TouchableOpacity>
                                <View style={headerTabContainer}>
                                    <Text style={headerTab}>Overview</Text>
                                    <Text style={headerTab}>Contact</Text>
                                    <Text style={headerTab}>Support</Text>
                                </View>
                            </View>
                        );
                    }}
                    </ThemeContext.Consumer>
                );
            }}
            </AuthContext.Consumer>
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