import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './src/reducers/rootReducer'

import BasicComponent from './src/components/BasicComponent'

const store = createStore(rootReducer);

const App = (props) => {
  return (
    <Provider store={store}>
      <BasicComponent/>
    </Provider>
  );
}


export default App