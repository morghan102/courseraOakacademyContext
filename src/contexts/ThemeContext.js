import React, { createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {
    state = {
        isDarkTheme: false,
        lightTheme: {
            color: '222',
            backgroundColor: '#d8ddf1'
        },
        darkTheme: {
            color: '#fff',
            backgroundColor: '#5c5c5c'
        }
    };

    render() {
        return (
            <ThemeContext.Provider value={{...this.state}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;