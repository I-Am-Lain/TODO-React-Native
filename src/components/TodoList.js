import React from 'react'
import { connect } from 'react-redux'

import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { deleteTodo } from '../actions/'


const TodoList = (props) => (
    <View style={styles.container}>
        <FlatList
        data={props.todos}
        renderItem={({ item }) => (
            <TouchableOpacity onPress={() => props.deleteTodo(item.key)}>
                <Text style={styles.listItem}>TASK: {item.name}</Text>
            </TouchableOpacity >
        )}
        />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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

export default connect(state => ({ todos: state.todos }), { deleteTodo })(TodoList)