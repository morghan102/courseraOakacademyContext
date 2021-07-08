import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Navbar from './src/components/Navbar';
import TodoList from './src/components/TodoList';


const App = () => {

  return (
     <View>
         <Navbar />
         <TodoList />
     </View>
 );   
}

const styles = StyleSheet.create({});

export default App;