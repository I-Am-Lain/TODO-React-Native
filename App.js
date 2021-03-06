import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { global } from './styles/global'


import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './src/reducers/rootReducer'

import BasicComponent from './src/components/BasicComponent'
import TodoContainer from './src/components/TodoContainer'
import Header from './src/components/Header'

import Navigator from './routes/homeStack'

const store = createStore(rootReducer);


const App = (props) => {
  return (
    <Provider store={store}>
      <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
        
        <View style={global.mainContainer}>
          <Header/>
          <Navigator/>
        </View>
        
      </TouchableWithoutFeedback>
    </Provider>
  );
}


export default App