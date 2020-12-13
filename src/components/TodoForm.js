import React, { useState } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

import { addTodo } from '../actions/'
import cuid from 'cuid'


const TodoForm = (props) => {

    const [todo, setTodo] = useState('')

    return(
        <View style={styles.container} >
            <Text>New Todo:</Text>
            <TextInput 
            style={styles.input}
            placeholder='e.g. Buy eggs'
            onChangeText={(val) => setTodo(val)}
            />
            <Button onPress={() => props.addTodo({ name: todo, key: cuid() })} title='add todo' color='coral' />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200
    }
});


export default connect(null, { addTodo })(TodoForm)