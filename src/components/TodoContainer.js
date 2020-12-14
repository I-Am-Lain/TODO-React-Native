import React from 'react'

import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';

import { global } from '../../styles/global'

import TodoForm from './TodoForm'
import TodoList from './TodoList'


const TodoContainer = (props) => (
    <View style={global.todoContainer} >
        <Button title='go to basic page' onPress={() => props.navigation.navigate('Test')}/>
        <TodoForm/>
        <TodoList/>
    </View>

)

export default TodoContainer