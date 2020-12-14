import React from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

import { deleteTodo } from '../actions/'

const TodoItem = (props) => (
        <TouchableOpacity onPress={() => { props.deleteTodo(props.id) }}>
            <View style={styles.container} >

                <Feather name="delete" size={24} color="black" />
                <Text style={styles.itemText}>TASK: {props.name}</Text>

            </View>
        </TouchableOpacity >
)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 16,
        padding: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        fontSize: 16,
        alignItems: 'center'
    },
    itemText: {
        marginLeft: 16
    }
});

export default connect(null, { deleteTodo })(TodoItem)