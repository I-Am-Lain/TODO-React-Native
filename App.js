import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';


import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './src/reducers/rootReducer'

import BasicComponent from './src/components/BasicComponent'
import TodoContainer from './src/components/TodoContainer'
import Header from './src/components/Header'

const store = createStore(rootReducer);


const App = (props) => {
  return (
    <Provider store={store}>
      <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
        
        <View style={styles.mainContainer}>
          <Header/>
          <TodoContainer/>
        </View>
        
      </TouchableWithoutFeedback>
    </Provider>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  }
});

export default App