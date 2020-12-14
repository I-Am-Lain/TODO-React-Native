import React from 'react'
import { connect } from 'react-redux'

import { View, FlatList } from 'react-native';

import { global } from '../../styles/global'

import TodoItem from './TodoItem'


const TodoList = (props) => (

    <View style={global.listContainer}>

        <FlatList
        data={props.todos}
        renderItem={({ item }) => <TodoItem id={item.key} {...item} />}
        />

    </View>
)


export default connect(state => ({ todos: state.todos }))(TodoList)