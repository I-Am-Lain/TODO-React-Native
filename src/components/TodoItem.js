import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native';

import { global } from '../../styles/global'

import { Feather } from '@expo/vector-icons'; 

import { deleteTodo } from '../actions/'

const TodoItem = (props) => (
        <TouchableOpacity onPress={() => { props.deleteTodo(props.id) }}>
            <View style={global.listItem} >

                <Feather name="delete" size={36} color="black" />
                <Text style={global.listItemText}>TASK: {props.name}</Text>

            </View>
        </TouchableOpacity >
)


export default connect(null, { deleteTodo })(TodoItem)