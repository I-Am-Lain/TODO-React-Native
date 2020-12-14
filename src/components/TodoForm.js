import React, { useState } from 'react'
import { connect } from 'react-redux'
import { View, Text, TextInput, Button } from 'react-native';

import { global } from '../../styles/global'

import { addTodo } from '../actions/'
import cuid from 'cuid'


const TodoForm = (props) => {

    const [todo, setTodo] = useState('')

    return(
        <View style={global.inputContainer} >
            <Text>New Todo:</Text>

            <TextInput 
            multiline
            style={global.input}
            placeholder='e.g. Buy eggs'
            onChangeText={(val) => setTodo(val)}
            />

            <View style={global.submitButton}>
                <Button onPress={() => props.addTodo({ name: todo, key: cuid() })} title='add todo' color='white' />
            </View>
        </View>
    )
}



export default connect(null, { addTodo })(TodoForm)