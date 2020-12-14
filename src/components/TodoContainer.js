import React from 'react'
import { connect } from 'react-redux'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import TodoForm from './TodoForm'
import TodoList from './TodoList'


const TodoContainer = (props) => (
    <View style={styles.container} >
        <TodoForm/>
        <TodoList/>
    </View>

)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    }
});


export default connect(state => ({ todos: state.todos }))(TodoContainer)