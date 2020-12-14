import React from 'react'
import { connect } from 'react-redux'

import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import TodoItem from './TodoItem'


const TodoList = (props) => (
    <View style={styles.container}>
        <FlatList
        data={props.todos}
        renderItem={({ item }) => <TodoItem id={item.key} {...item} />}
        />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        width: 250, // will also make list container background show automatically
        marginBottom: 50,
        marginTop: 16
    },
    listItem: {
        marginTop: 16,
        padding: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        fontSize: 16
    }
});

export default connect(state => ({ todos: state.todos }))(TodoList)